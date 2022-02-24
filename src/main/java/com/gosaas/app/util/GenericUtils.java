package com.gosaas.app.util;

import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import com.gosaas.app.model.Link;
import com.gosaas.app.model.change.ChangeRequestResponse;


public class GenericUtils {   

    public static String getLinkByName(String linkName, ChangeRequestResponse changeRequest) {
        String linkURL = null;
        for (Link link : changeRequest.getLinks()) {
            if (linkName.equalsIgnoreCase(link.getName())) {
                linkURL = link.getHref();
                break;
            }
        }
        return linkURL;
    }

    public static String getLinkByRel(String rel, ChangeRequestResponse changeRequest) {
        String linkURL = null;
        for (Link link : changeRequest.getLinks()) {
            if (rel.equalsIgnoreCase(link.getRel())) {
                linkURL = link.getHref();
                break;
            }
        }
        return linkURL;
    }

    public static String getLinkByName(String linkName, List<Link> links) {
        String linkURL = null;
        for (Link link : links) {
            if (linkName.equalsIgnoreCase(link.getName())) {
                linkURL = link.getHref();
                break;
            }
        }
        return linkURL;
    }

    public static HttpHeaders buildApiHeaders(String authHeader) {

        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(authHeader);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }
    
    public static HttpHeaders buildApiHeadersJWT(String authHeader) {

        HttpHeaders headers = new HttpHeaders();        
        headers.setBearerAuth(authHeader);        
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }


}
