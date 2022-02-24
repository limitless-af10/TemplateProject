package com.gosaas.app.util;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.StringReader;
import java.util.AbstractList;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;

public final class XmlUtil {
    private XmlUtil(){}

    public static Document stringToDocument(final String xmlSource) throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        return builder.parse(new InputSource(new StringReader(xmlSource)));
    }
    public static Document stringToDoc(final String xmlSource) throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        return builder.parse(new InputSource(new ByteArrayInputStream(xmlSource.getBytes("UTF-8"))));
    }

    public static List<Node> asList(NodeList n) {
        return n.getLength()==0?
                Collections.<Node>emptyList(): new NodeListWrapper(n);
    }

    public static String getNodeValue(Document document, String tagName) {
        NodeList n = document.getElementsByTagName(tagName);
        List<Node> nodeList = n.getLength()==0?
                null: new NodeListWrapper(n);
        if(nodeList==null){
            return "";
        }else{
            return nodeList.get(0).getTextContent();
        }
    }

    public static String getNodeValue(Element document, String tagName) {
        NodeList n = document.getElementsByTagName(tagName);
        List<Node> nodeList = n.getLength()==0?
                null: new NodeListWrapper(n);
        if(nodeList==null){
            return "";
        }else{
            return nodeList.get(0).getTextContent();
        }
    }

    static final class NodeListWrapper extends AbstractList<Node>
            implements RandomAccess {
        private final NodeList list;
        NodeListWrapper(NodeList l) {
            list=l;
        }
        public Node get(int index) {
            return list.item(index);
        }
        public int size() {
            return list.getLength();
        }
    }
}
