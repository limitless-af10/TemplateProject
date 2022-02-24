<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://xmlns.oracle.com/apps/scm/productModel/items/itemServiceV2/types/" xmlns:typ1="http://xmlns.oracle.com/adf/svc/types/">
   <soapenv:Header/>
   <soapenv:Body>
      <typ:findItem>
         <typ:findCriteria>
            <#if fetchStart?? >
            <typ1:fetchStart>${fetchStart}</typ1:fetchStart>
            <#else>
            <typ1:fetchStart>0</typ1:fetchStart>
            </#if>
            <typ1:fetchSize>${fetchSize}</typ1:fetchSize>
             <#if items?? >
            <typ1:filter>
               <typ1:group> 
                <#list items as item>             
                  <typ1:item>
                 	<typ1:upperCaseCompare>false</typ1:upperCaseCompare>
                     <#if item.conjunction?? >
                     <typ1:conjunction>${item.conjunction}</typ1:conjunction>
                     </#if>
                     <typ1:attribute>${item.attribute}</typ1:attribute>
                     <#if item.operator?? >
                     <typ1:operator>${item.operator}</typ1:operator>
                     </#if>
                     <#if item.value?? >
                     <typ1:value>${item.value}</typ1:value>
                     </#if>
                  </typ1:item>
                  </#list>
                  <typ1:item>
                     <typ1:upperCaseCompare>false</typ1:upperCaseCompare>
                     <typ1:conjunction>And</typ1:conjunction>
                     <typ1:attribute>OrganizationCode</typ1:attribute>
                     <typ1:operator>=</typ1:operator>
                     <typ1:value>FPD</typ1:value>
                  </typ1:item>
               </typ1:group>
            </typ1:filter>
             </#if>
             <typ1:findAttribute>ItemNumber</typ1:findAttribute>
            <typ1:findAttribute>ItemEffCategory</typ1:findAttribute>
             <typ1:findAttribute>ItemEffCategory</typ1:findAttribute>
                  <typ1:childFindCriteria>
                     <typ1:findAttribute>CategoryCode</typ1:findAttribute>
                     <typ1:findAttribute>ItemEFFBCommonDocumentsInformationPrivateVO</typ1:findAttribute>
                     <typ1:childFindCriteria>                        
                        <typ1:findAttribute>tabledDrawing</typ1:findAttribute>
                        <typ1:excludeAttribute>false</typ1:excludeAttribute>
                        <typ1:childAttrName>ItemEFFBCommonDocumentsInformationPrivateVO</typ1:childAttrName>
                     </typ1:childFindCriteria>
                     <typ1:excludeAttribute>false</typ1:excludeAttribute>
                     <typ1:childAttrName>ItemEffCategory</typ1:childAttrName>
                  </typ1:childFindCriteria>
            <typ1:excludeAttribute>false</typ1:excludeAttribute>
         </typ:findCriteria>
         <typ:findControl>
            <typ1:retrieveAllTranslations>false</typ1:retrieveAllTranslations>
         </typ:findControl>
      </typ:findItem>
   </soapenv:Body>
</soapenv:Envelope>