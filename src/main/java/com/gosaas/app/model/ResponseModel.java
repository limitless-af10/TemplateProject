package com.gosaas.app.model;

import java.util.List;

import org.json.JSONObject;


public class ResponseModel {

private String parentItemNumber;

private List<JSONObject> linkedItems;


public String getParentItemNumber() {
return parentItemNumber;
}


public void setParentItemNumber(String parentItemNumber) {
this.parentItemNumber = parentItemNumber;
}


public List<JSONObject> getLinkedItems() {
return linkedItems;
}

public void addLinkedItem(JSONObject linkedItems) {
this.linkedItems.add(linkedItems);
}

public void setLinkedItems(List<JSONObject> linkedItems) {
this.linkedItems = linkedItems;
}

}