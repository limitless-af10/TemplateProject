package com.gosaas.app.model.freemarker;

import java.util.Arrays;
import java.util.List;

public class FilterItem {

	private String conjunction = null;
	private String attribute = null;
	private String operator = null;
	private String value = null;
	private List<FilterItem> nestedItems = null;
	
	public FilterItem(String attribute, String operator, String value) {
		this.attribute = attribute;
		this.operator = operator;
		this.value = value;
	}
	
	public FilterItem(String conjunction, String attribute, String operator, String value) {
		this.conjunction = conjunction;
		this.attribute = attribute;
		this.operator = operator;
		this.value = value;
	}
	
	public FilterItem(String conjunction, String attribute, FilterItem[] nestedItems) {
		this.conjunction = conjunction;
		this.attribute = attribute;
		this.nestedItems = Arrays.asList(nestedItems);
	}
	
	public String getConjunction() {
		return conjunction;
	}
	
	public String getAttribute() {
		return attribute;
	}
	
	public String getOperator() {
		return operator;
	}
	
	public String getValue() {
		return value;
	}
	
	public List<FilterItem> getNestedItems() {
		return nestedItems;
	}
	
}
