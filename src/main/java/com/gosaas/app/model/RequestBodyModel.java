package com.gosaas.app.model;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"jwt",
"changeNotice"
})
@Generated("jsonschema2pojo")
public class RequestBodyModel {

@JsonProperty("jwt")
private String jwt;
@JsonProperty("changeNotice")
private String changeNotice;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("jwt")
public String getJwt() {
return jwt;
}

@JsonProperty("jwt")
public void setJwt(String jwt) {
this.jwt = jwt;
}

@JsonProperty("changeNotice")
public String getChangeNotice() {
return changeNotice;
}

@JsonProperty("changeNotice")
public void setChangeNotice(String changeNotice) {
this.changeNotice = changeNotice;
}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}

@Override
public String toString() {
StringBuilder sb = new StringBuilder();
sb.append(RequestBodyModel.class.getName()).append('@').append(Integer.toHexString(System.identityHashCode(this))).append('[');
sb.append("jwt");
sb.append('=');
sb.append(((this.jwt == null)?"<null>":this.jwt));
sb.append(',');
sb.append("changeNotice");
sb.append('=');
sb.append(((this.changeNotice == null)?"<null>":this.changeNotice));
sb.append(',');
sb.append("additionalProperties");
sb.append('=');
sb.append(((this.additionalProperties == null)?"<null>":this.additionalProperties));
sb.append(',');
if (sb.charAt((sb.length()- 1)) == ',') {
sb.setCharAt((sb.length()- 1), ']');
} else {
sb.append(']');
}
return sb.toString();
}

}