package com.gosaas.app.util;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Component;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.namespace.QName;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPMessage;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import javax.xml.ws.Dispatch;
import javax.xml.ws.Service;
import javax.xml.ws.handler.MessageContext;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SOAPUtils {

    private static final int SOCKET_TIMEOUT = 360000;
    private static final int CONNECT_TIMEOUT = 360000;

    public static SOAPMessage getSOAPRequest(String requestString)
            throws SOAPException, ParserConfigurationException, SAXException, IOException {
        ByteArrayInputStream is = new ByteArrayInputStream(requestString.getBytes());
        return MessageFactory.newInstance().createMessage(null, is);
    }
    
    public Document runSOAPRequest_1_2(final String URL, String soapAction, String soapXml, final String AUTH_KEY,
			final int SOCKET_TIMEOUT, final int CONNECT_TIMEOUT) throws Exception {
		return runSOAPRequest(URL, soapAction, soapXml, AUTH_KEY, SOCKET_TIMEOUT, CONNECT_TIMEOUT,
				"application/soap+xml;charset=UTF-8");
	}

    public static Document getSOAPResponse(SOAPMessage soapResponse)
            throws SOAPException, IOException, ParserConfigurationException, SAXException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        soapResponse.writeTo(os);

        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        ByteArrayInputStream is = new ByteArrayInputStream(os.toByteArray());
        Document doc = dBuilder.parse(is);

        return doc;
    }

    public static String getTagNamePrefix(Element element) {
        Element child = (Element) element.getChildNodes().item(0);
        String tagName = child.getTagName();
        int i = tagName.indexOf(":");

        if (i > 0) {
            return tagName.substring(0, i + 1);
        } else {
            return "";
        }
    }

    public static String getTagNamePrefix(Document doc) {
        Element child = (Element) doc.getChildNodes().item(0);
        String tagName = child.getTagName();
        int i = tagName.indexOf(":");

        if (i > 0) {
            return tagName.substring(0, i + 1);
        } else {
            return "";
        }
    }

    public static Dispatch<SOAPMessage> getDispatcher(final String WSDL_URL, final String NAMESPACE,
													  final String SERVICE_NAME,
                                                      final String PORT_NAME, final String JWT) throws MalformedURLException {
        QName serviceName = new QName(NAMESPACE, SERVICE_NAME);
        QName portname = new QName(NAMESPACE, PORT_NAME);

        Service service = Service.create(new URL(WSDL_URL), serviceName);
        Dispatch<SOAPMessage> dispatcher = service.createDispatch(portname, SOAPMessage.class, Service.Mode.MESSAGE);

        Map<String, List<String>> authMap = new HashMap<String, List<String>>();
        List<String> authZlist = new ArrayList<String>();
        authZlist.add(new StringBuilder().append("Bearer ").append(JWT).toString());
        authMap.put("Authorization", authZlist);
        dispatcher.getRequestContext().put(MessageContext.HTTP_REQUEST_HEADERS, authMap);

        return dispatcher;
    }

    public static Dispatch<SOAPMessage> getDispatcherBasicAuth(final String WSDL_URL, final String NAMESPACE,
															   final String SERVICE_NAME,
                                                               final String PORT_NAME, final String auth) throws MalformedURLException {
        QName serviceName = new QName(NAMESPACE, SERVICE_NAME);
        QName portname = new QName(NAMESPACE, PORT_NAME);

        Service service = Service.create(new URL(WSDL_URL), serviceName);
        Dispatch<SOAPMessage> dispatcher = service.createDispatch(portname, SOAPMessage.class, Service.Mode.MESSAGE);

        Map<String, List<String>> authMap = new HashMap<String, List<String>>();
        List<String> authZlist = new ArrayList<String>();
        authZlist.add(new StringBuilder().append("Basic ").append(auth).toString());
        authMap.put("Authorization", authZlist);
        dispatcher.getRequestContext().put(MessageContext.HTTP_REQUEST_HEADERS, authMap);

        return dispatcher;
    }

    public static Document getHTTPClientResponse(final String WSDL_URL, final String JWT, String payload,
												 final String NAME_SPACE, String action) throws Exception {
        String soapAction = NAME_SPACE + action;
        return runSOAPRequest(WSDL_URL, soapAction, payload, JWT, SOCKET_TIMEOUT, CONNECT_TIMEOUT, "text/xml;" +
				"charset=UTF-8");
    }

    private static Document runSOAPRequest(final String URL, String soapAction, String soapXml, final String AUTH_KEY
			, final int SOCKET_TIMEOUT, final int CONNECT_TIMEOUT, String contentType) throws Exception {
        int i = 1;
        while (true) {
            try {
                return runSOAPRequest(URL, soapAction, soapXml, AUTH_KEY, SOCKET_TIMEOUT, CONNECT_TIMEOUT,
						contentType, false);
            } catch (Exception ex) {
                if (i++ > 3) {
                    throw ex;
                }
            }
        }
    }

    private static Document runSOAPRequest(final String URL, String soapAction, String soapXml, final String AUTH_KEY
			, final int SOCKET_TIMEOUT, final int CONNECT_TIMEOUT, String contentType, boolean namespaceAware) throws Exception {

        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
//		httpClientBuilder.setRetryHandler(new HttpRequestRetryHandlerImp());

        CloseableHttpClient closeableHttpClient = null;
        CloseableHttpResponse response = null;

        try {
            closeableHttpClient = httpClientBuilder.build();
            HttpPost httpPost = new HttpPost(URL);

            RequestConfig requestConfig = RequestConfig.custom()
                    .setSocketTimeout(SOCKET_TIMEOUT)
                    .setConnectionRequestTimeout(CONNECT_TIMEOUT)
                    .setConnectTimeout(CONNECT_TIMEOUT)
                    .build();

            httpPost.setConfig(requestConfig);
            httpPost.setHeader("Content-Type", contentType);
            httpPost.setHeader("SOAPAction", soapAction);
            httpPost.setHeader(HttpHeaders.AUTHORIZATION, "Basic " + AUTH_KEY);
            StringEntity data = new StringEntity(soapXml, Charset.forName("UTF-8"));
            httpPost.setEntity(data);
            response = closeableHttpClient.execute(httpPost);
            HttpEntity httpEntity = response.getEntity();
            if (httpEntity != null) {
                return getSOAPResponse(EntityUtils.toString(httpEntity, "UTF-8"), namespaceAware);
            }

            return null;
        } finally {
            if (response != null)
                response.close();
            if (closeableHttpClient != null)
                closeableHttpClient.close();
        }
    }

    public static Document getSOAPResponse(String responseString, boolean namespaceAware) throws SOAPException, IOException, ParserConfigurationException, SAXException {
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        dbFactory.setNamespaceAware(namespaceAware);

        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        ByteArrayInputStream is = new ByteArrayInputStream(responseString.getBytes("UTF-8"));
        Document doc = dBuilder.parse(is);

        return doc;
    }
    public <T> T loadXMLFromString(byte[] xml, Class<T> type) throws JAXBException, UnsupportedEncodingException {		
		JAXBContext jaxbContext = JAXBContext.newInstance(type);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		JAXBElement<T> root = jaxbUnmarshaller.unmarshal(new StreamSource(new ByteArrayInputStream(xml)), type);
		return root.getValue();
	}
    public static String toString(Document doc) throws TransformerFactoryConfigurationError, TransformerException {
		DOMSource domSource = new DOMSource(doc);
		Transformer transformer = TransformerFactory.newInstance().newTransformer();
		StringWriter sw = new StringWriter();
		StreamResult sr = new StreamResult(sw);
		transformer.transform(domSource, sr);
		return sw.toString();
	}

}

