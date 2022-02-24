package com.gosaas.app.model.freemarker;

public class Attribute {

	private String apiName = null;
	private String value = null;

	public Attribute(String apiName, String value) {
		this.apiName = apiName;
		this.value = value;
	}

	public String getApiName() {
		return apiName;
	}

	public void setApiName(String apiName) {
		this.apiName = apiName;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}
