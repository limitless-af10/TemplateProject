package com.gosaas.app.model.freemarker;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;


public class AttributeGroup {

	private String name = null;
	private String value = null;
	private List<AttributeGroup> attributes = null;

	public AttributeGroup(String name, String value) {
		this.name = name;
		this.value = value;
	}

	public AttributeGroup(String name, Map<String, String> childAttributes) {
		this.name = name;
		this.attributes = new ArrayList<>();

		for (Entry<String, String> childname : childAttributes.entrySet()) {
			this.attributes.add(new AttributeGroup(childname.getKey(), childname.getValue()));
		}
	}

	public AttributeGroup(String name, String value, Map<String, String> childAttributes) {
		this.name = name;
		this.value = value;
		this.attributes = new ArrayList<>();

		for (Entry<String, String> childname : childAttributes.entrySet()) {
			this.attributes.add(new AttributeGroup(childname.getKey(), childname.getValue()));
		}
	}

	public String getName() {
		return name;
	}

	public String getvalue() {
		return value;
	}

	public List<AttributeGroup> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<AttributeGroup> attributes) {
		this.attributes = attributes;
	}

}
