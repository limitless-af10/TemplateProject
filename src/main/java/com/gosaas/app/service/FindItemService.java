package com.gosaas.app.service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.xml.soap.SOAPMessage;
import javax.xml.ws.Dispatch;

import org.apache.commons.collections4.ListUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import com.gosaas.app.model.freemarker.FilterItem;
import com.gosaas.app.util.SOAPUtils;
import com.gosaas.app.util.XmlUtil;

import freemarker.template.Configuration;

@Service
public class FindItemService {
	@Autowired
	Configuration fmConfiguration;

	private final Logger log = LoggerFactory.getLogger(this.getClass());
	private Dispatch<SOAPMessage> dispatch = null;
	
	@Value("${server.url}")
    private String SERVER_URL;
    private String WSDL_PATH;
    private String NAMESPACE;
    private String SERVICE_NAME;
    private String PORT_NAME;
    
    private final int Max_Size = 500;
    
    public Map<String,Boolean> findItem(List<String> items, String organizationCode, String jwt) throws Exception{
    	log.info("Validating isTabledDrawing check : ");
    	boolean sizeLimitReached = false;
    	Map<String,Boolean> isTabledDrawingMap = new HashMap<>();
    	List<List<String>> itemSubLists = ListUtils.partition(items, Max_Size);
    	
		for(List<String> itemSubList : itemSubLists) {
			Map<String, Object> data = new HashMap<>();
			data.put("fetchStart", 0);
			data.put("fetchSize", Max_Size);
			List<FilterItem> filterItems = new LinkedList<>();
			for (int i = 0; i < itemSubList.size(); i++) {
				String conjunction = i == 0 ? null : "Or";
				filterItems.add(new FilterItem(conjunction, "ItemNumber", "=", itemSubList.get(i)));
			}
			
			data.put("items", filterItems);

			String requestString = FreeMarkerTemplateUtils
					.processTemplateIntoString(fmConfiguration.getTemplate("findItem.ftl"), data);

			SOAPMessage requestMessage = SOAPUtils.getSOAPRequest(requestString);
			this.dispatch = SOAPUtils.getDispatcher(SERVER_URL + WSDL_PATH, NAMESPACE, SERVICE_NAME, PORT_NAME,jwt);
			SOAPMessage responseMessage = dispatch.invoke(requestMessage);
			Document response = SOAPUtils.getSOAPResponse(responseMessage);
			
			sizeLimitReached = parseResponse(response,isTabledDrawingMap);
			if(!sizeLimitReached)
				break;
		}
		return isTabledDrawingMap;
		
		
    }
    
    private boolean parseResponse(Document response, Map<String,Boolean> isTabledDrawingMap) {
    	List<Node> nodeList = XmlUtil.asList(response.getElementsByTagName("ns0:Value"));
    	for (Node valueNode : nodeList) {
			if (valueNode.getNodeType() == Node.ELEMENT_NODE) {
				Element valueElement = (Element) valueNode;
				String itemNumber = XmlUtil.getNodeValue(valueElement, "ns1:ItemNumber");
				if(!isTabledDrawingMap.containsKey(itemNumber)) {
					String tabledDrawing = XmlUtil.getNodeValue(valueElement, "ns7:tabledDrawing");
					boolean isTabledDrawing = tabledDrawing.equalsIgnoreCase("No") ? false : true;
					isTabledDrawingMap.put(itemNumber, isTabledDrawing);
				}
				
			}
    	}
    	if(null != nodeList) {
    		if(nodeList.size()<Max_Size)
    			return false;
    		else 
    			return true;
    	}
    	return false;	
    }
    
    
}
