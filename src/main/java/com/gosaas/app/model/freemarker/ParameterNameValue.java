package com.gosaas.app.model.freemarker;

import org.springframework.stereotype.Component;

@Component
public class ParameterNameValue {

	private String name = null;
	private String[] values = null;
	
	public ParameterNameValue(String name, String... values) {
		this.name = name;
		this.values = values;
	}
	
	public ParameterNameValue() {
		
	};

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String[] getValues() {
		return values;
	}

	public void setValues(String[] values) {
		this.values = values;
	}
	
}
