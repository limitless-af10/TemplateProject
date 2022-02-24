package com.gosaas.app.model.change;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gosaas.app.model.Link;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonSerialize
@JsonPropertyOrder({
        "ChangeNotice",
        "ChangeId",
        "ChangeName",
        "ChangeTypeValue",
        "StatusCodeValue",
        "OrganizationCode",
        "links"
})
public class ChangeRequestResponse {

    @JsonProperty("ChangeNotice")
    private String changeNotice;
    @JsonProperty("ChangeId")
    private Long changeId;
    @JsonProperty("StatusCodeValue")
    private String statusCodeValue;
    @JsonProperty("ChangeName")
    private String ChangeName;
    @JsonProperty("ChangeTypeValue")
    private String ChangeTypeValue;
    @JsonProperty("OrganizationCode")
    private String OrganizationCode;    
    @JsonProperty("links")
    private List<Link> links = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("ChangeNotice")
    public String getChangeNotice() {
        return changeNotice;
    }

    @JsonProperty("ChangeNotice")
    public void setChangeNotice(String changeNotice) {
        this.changeNotice = changeNotice;
    }

    @JsonProperty("ChangeId")
    public Long getChangeId() {
        return changeId;
    }

    @JsonProperty("ChangeId")
    public void setChangeId(Long changeId) {
        this.changeId = changeId;
    }

    @JsonProperty("StatusCodeValue")
    public String getStatusCodeValue() {
        return statusCodeValue;
    }

    @JsonProperty("StatusCodeValue")
    public void setStatusCodeValue(String statusCodeValue) {
        this.statusCodeValue = statusCodeValue;
    }    

    @JsonProperty("ChangeName")
    public String getChangeName() {
        return ChangeName;
    }

    @JsonProperty("ChangeName")
    public void setChangeName(String ChangeName) {
        this.ChangeName = ChangeName;
    }

    @JsonProperty("ChangeTypeValue")
    public String getChangeTypeValue() {
        return ChangeTypeValue;
    }

    @JsonProperty("ChangeTypeValue")
    public void setChangeTypeValue(String ChangeTypeValue) {
        this.ChangeTypeValue = ChangeTypeValue;
    }

    @JsonProperty("OrganizationCode")
    public String getOrganizationCode() {
        return OrganizationCode;
    }

    @JsonProperty("OrganizationCode")
    public void setOrganizationCode(String OrganizationCode) {
        this.OrganizationCode = OrganizationCode;
    }
    
    @JsonProperty("links")
    public List<Link> getLinks() {
        return links;
    }

    @JsonProperty("links")
    public void setLinks(List<Link> links) {
        this.links = links;
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
        return "ChangeRequest{" +
                "changeNotice='" + changeNotice + '\'' +
                ", changeId=" + changeId +
                ", statusCodeValue='" + statusCodeValue + '\'' +
                ", ChangeName='" + ChangeName + '\'' +
                ", ChangeTypeValue='" + ChangeTypeValue + '\'' +
                ", OrganizationCode='" + OrganizationCode + '\'' +
                ", links=" + links +
                ", additionalProperties=" + additionalProperties +
                '}';
    }
}