package com.gosaas.app.model.change;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class ChangeDAO {

	private String number;
	private String currentStatus;
	private Map<String, String> attributes;		
	
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}

	public String getValue(String attrName) {
		return attributes.get(attrName);
	}

	public void setValue(String attrName, String value) {
		this.attributes.put(attrName, value);
	}	
	

	public String getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(String currentStatus) {
		this.currentStatus = currentStatus;
	}

	@Override
	public String toString() {
		return "{Attributes: " + attributes + "}";
	}
	
}