/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojcomponentcore","ojs/ojdvt-base","jquery","ojs/ojnbox-toolkit"],function(e,t,o,n,l){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var a={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},as:{type:"string",value:""},cellContent:{type:"string",enumValues:["auto","counts"],value:"auto"},cellMaximize:{type:"string",enumValues:["off","on"],value:"on"},cells:{type:"Array<Object>|Promise"},columns:{type:"Array<Object>|Promise"},columnsTitle:{type:"string",value:""},countLabel:{type:"function"},data:{type:"object",extension:{webelement:{exceptionStatus:[{type:"deprecated",since:"11.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},groupAttributes:{type:"Array<string>",enumValues:["color","indicatorColor","indicatorIconColor","indicatorIconPattern","indicatorIconShape"],value:["color","indicatorColor","indicatorIconShape","indicatorIconColor","indicatorIconPattern"]},groupBehavior:{type:"string",enumValues:["acrossCells","none","withinCell"],value:"withinCell"},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},labelTruncation:{type:"string",enumValues:["ifRequired","on"],value:"on"},maximizedColumn:{type:"string",writeback:!0,value:""},maximizedRow:{type:"string",writeback:!0,value:""},nodes:{type:"Array<Object>|Promise"},otherColor:{type:"string"},otherThreshold:{type:"number",value:0},rows:{type:"Array<Object>|Promise"},rowsTitle:{type:"string",value:""},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"multiple"},styleDefaults:{type:"object",properties:{animationDuration:{type:"number"},cellDefaults:{type:"object",properties:{labelHalign:{type:"string",enumValues:["center","end","start"],value:"start"},labelStyle:{type:"object"},maximizedSvgStyle:{type:"object"},minimizedSvgStyle:{type:"object"},showCount:{type:"string",enumValues:["auto","off","on"],value:"auto"},svgStyle:{type:"object"}}},columnLabelStyle:{type:"object"},columnsTitleStyle:{type:"object"},hoverBehaviorDelay:{type:"number",value:200},nodeDefaults:{type:"object",properties:{borderColor:{type:"string"},borderWidth:{type:"number"},color:{type:"string"},iconDefaults:{type:"object",properties:{background:{type:"string",value:"neutral"},borderColor:{type:"string"},borderRadius:{type:"string"},borderWidth:{type:"number"},color:{type:"string",value:""},height:{type:"number",value:0},opacity:{type:"number",value:1},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","none","smallChecker","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"],value:"none"},shape:{type:"string",value:"square"},source:{type:"string",value:""},width:{type:"number",value:0}}},indicatorColor:{type:"string",value:""},indicatorIconDefaults:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string"},borderWidth:{type:"number"},color:{type:"string",value:""},height:{type:"number"},opacity:{type:"number",value:1},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","none","smallChecker","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"],value:"none"},shape:{type:"string",value:"square"},source:{type:"string"},width:{type:"number"}}},labelStyle:{type:"object"},secondaryLabelStyle:{type:"object"}}},rowLabelStyle:{type:"object"},rowsTitleStyle:{type:"object"}}},tooltip:{type:"object",properties:{renderer:{type:"function"}}},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},highlightedCount:{type:"string"},labelAdditionalData:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelGroup:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},labelOther:{type:"string"},labelSize:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}}},methods:{getCell:{},getColumn:{},getColumnCount:{},getColumnsTitle:{},getContextByNode:{},getDialog:{},getGroupBehavior:{},getGroupNode:{},getProperty:{},getRow:{},getRowCount:{},getRowsTitle:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};a.extension._WIDGET_NAME="ojNBox",e.CustomElementBridge.register("oj-n-box",{metadata:a,parseFunction:o.shapeParseFunction({"style-defaults.node-defaults.icon-defaults.shape":!0,"style-defaults.node-defaults.indicator-icon-defaults.shape":!0})});var r={properties:{borderColor:{type:"string",value:""},borderWidth:{type:"number",value:0},categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},column:{type:"string",value:""},groupCategory:{type:"string",value:""},icon:{type:"object",properties:{background:{type:"string",value:"neutral"},borderColor:{type:"string"},borderRadius:{type:"string"},borderWidth:{type:"number"},color:{type:"string"},height:{type:"number"},initials:{type:"string",value:""},opacity:{type:"number"},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","mallChecker","none","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"],value:"none"},shape:{type:"string"},source:{type:"string"},svgClassName:{type:"string",value:""},svgStyle:{type:"object"},width:{type:"number"}}},indicatorColor:{type:"string",value:""},indicatorIcon:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string"},borderWidth:{type:"number"},color:{type:"string"},height:{type:"number"},opacity:{type:"number"},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","none","smallChecker","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"]},shape:{type:"string"},source:{type:"string"},svgClassName:{type:"string"},svgStyle:{type:"object"},width:{type:"number"}}},label:{type:"string",value:""},row:{type:"string",value:""},secondaryLabel:{type:"string",value:""},shortDesc:{type:"string|function",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object"},xPercentage:{type:"number"},yPercentage:{type:"number"}},extension:{}};r.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-n-box-node",{metadata:r,parseFunction:o.shapeParseFunction({"icon.shape":!0,"indicator-icon.shape":!0})}),e.__registerWidget("oj.ojNBox",n.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationOnDataChange:"none",animationOnDisplay:"none",as:"",cellContent:"auto",cellMaximize:"on",cells:null,columns:null,columnsTitle:"",countLabel:null,data:null,groupBehavior:"withinCell",groupAttributes:["color","indicatorColor","indicatorIconColor","indicatorIconPattern","indicatorIconShape"],hiddenCategories:[],hoverBehavior:"none",highlightedCategories:[],highlightMatch:"all",labelTruncation:"on",maximizedColumn:"",maximizedRow:"",nodes:null,otherColor:"#636363",otherThreshold:0,rows:null,rowsTitle:"",selection:[],selectionMode:"multiple",styleDefaults:{animationDuration:void 0,cellDefaults:{labelHalign:"start",labelStyle:void 0,maximizedSvgStyle:void 0,minimizedSvgStyle:void 0,showCount:"auto",svgStyle:void 0},columnLabelStyle:void 0,columnsTitleStyle:void 0,hoverBehaviorDelay:200,nodeDefaults:{borderColor:"",borderWidth:0,color:void 0,iconDefaults:{borderColor:"#000000",borderRadius:0,borderWidth:0,color:"",height:0,opacity:1,pattern:"none",shape:"square",source:"",background:"neutral",width:0},indicatorColor:"",indicatorIconDefaults:{borderColor:"#000000",borderRadius:0,borderWidth:0,color:"",height:10,opacity:1,pattern:"none",shape:"square",source:"",width:10},labelStyle:void 0,secondaryLabelStyle:void 0},rowLabelStyle:void 0,rowsTitleStyle:void 0},tooltip:{renderer:null},touchResponse:"auto"},_CreateDvtComponent:function(e,t,o){return l.NBox.newInstance(e,t,o)},_ConvertLocatorToSubId:function(e){var t=e.subId;if("oj-nbox-cell"===t)t="cell["+e.row+","+e.column+"]";else if("oj-nbox-dialog"===t)t="dialog";else if("oj-nbox-dialog-close-button"===t)t="dialog#closeButton";else if("oj-nbox-group-node"===t)t=e.row&&e.column?"cell["+e.row+","+e.column+"]#groupNode[":"groupNode[",t+=e.groupCategory+"]";else if("oj-nbox-node"===t){t="";var o=e.id;t+="node["+this._component.getAutomation().getNodeIndexFromId(o)+"]"}else"oj-nbox-overflow"===t?t="cell["+e.row+","+e.column+"]#overflow":"oj-nbox-tooltip"===t&&(t="tooltip");return t},_ConvertSubIdToLocator:function(e){var t={};if(0===e.indexOf("node")){t.subId="oj-nbox-node";var o=this._GetFirstIndex(e),n=this._component.getAutomation();t.id=n.getNodeIdFromIndex(o)}else if(0===e.indexOf("cell")){var l=this._GetFirstBracketedString(e),a=l.indexOf(",");t.row=l.substring(0,a),t.column=l.substring(a+1);var r=e.indexOf("#");e.indexOf("#groupNode")>0?(t.subId="oj-nbox-group-node",t.groupCategory=this._GetFirstBracketedString(e.substring(r))):e.indexOf("#overflow")>0?t.subId="oj-nbox-overflow":t.subId="oj-nbox-cell"}else 0===e.indexOf("dialog")?e.indexOf("#closeButton")>0?t.subId="oj-nbox-dialog-close-button":t.subId="oj-nbox-dialog":0===e.indexOf("groupNode")?(t.subId="oj-nbox-group-node",t.groupCategory=this._GetFirstBracketedString(e)):"tooltip"===e&&(t.subId="oj-nbox-tooltip");return t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-nbox"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-nbox"]={path:"styleDefaults/animationDuration",property:"ANIM_DUR"},e["oj-nbox-container"]={path:"__layout/cellGap",property:"grid-gap"},e["oj-nbox-columns-title"]={path:"styleDefaults/columnsTitleStyle",property:"TEXT"},e["oj-nbox-rows-title"]={path:"styleDefaults/rowsTitleStyle",property:"TEXT"},e["oj-nbox-column-label"]={path:"styleDefaults/columnLabelStyle",property:"TEXT"},e["oj-nbox-row-label"]={path:"styleDefaults/rowLabelStyle",property:"TEXT"},e["oj-nbox-cell"]=[{path:"styleDefaults/cellDefaults/_style",property:"BACKGROUND"},{path:"styleDefaults/cellDefaults/_borderRadius",property:"border-radius"},{path:"__layout/gridGap",property:"grid-gap"},{path:"__layout/cellInnerPadding",property:"padding"},{path:"__layout/minimumCellSize",property:"height"}],e["oj-nbox-cell oj-minimized"]={path:"styleDefaults/cellDefaults/_minimizedStyle",property:"BACKGROUND"},e["oj-nbox-cell oj-maximized"]={path:"styleDefaults/cellDefaults/_maximizedStyle",property:"BACKGROUND"},e["oj-nbox-cell-label"]={path:"styleDefaults/cellDefaults/labelStyle",property:"TEXT"},e["oj-nbox-cell-label oj-minimized"]={path:"styleDefaults/cellDefaults/_labelMinimizedStyle",property:"TEXT"},e["oj-nbox-cell-label oj-maximized"]={path:"styleDefaults/cellDefaults/_labelMaximizedStyle",property:"TEXT"},e["oj-nbox-cell-countlabel"]={path:"styleDefaults/cellDefaults/bodyCountLabelStyle",property:"TEXT"},e["oj-nbox-cell-countlabel oj-nbox-cell-header"]={path:"styleDefaults/cellDefaults/countLabelStyle",property:"TEXT"},e["oj-nbox-cell-shadow"]={path:"styleDefaults/cellDefaults/_panelShadow",property:"box-shadow"},e["oj-nbox-node"]=[{path:"styleDefaults/nodeDefaults/color",property:"background-color"},{path:"styleDefaults/nodeDefaults/_borderRadius",property:"border-radius"},{path:"__layout/minimumLabelWidth",property:"min-width"},{path:"__layout/maximumLabelWidth",property:"max-width"}],e["oj-nbox-node oj-hover"]={path:"styleDefaults/nodeDefaults/hoverColor",property:"border-color"},e["oj-nbox-node oj-selected"]={path:"styleDefaults/nodeDefaults/selectionColor",property:"border-color"},e["oj-nbox-node-no-label"]={path:"styleDefaults/nodeDefaults/iconDefaults/preferredSizeNoLabel",property:"height"},e["oj-nbox-node-one-label-padding"]={path:"__layout/nodeSingleLabelGap",property:"padding"},e["oj-nbox-node-two-label-padding"]={path:"__layout/nodeDualLabelGap",property:"padding"},e["oj-nbox-node-label"]={path:"styleDefaults/nodeDefaults/labelStyle",property:"TEXT"},e["oj-nbox-node-secondarylabel"]={path:"styleDefaults/nodeDefaults/secondaryLabelStyle",property:"TEXT"},e["oj-nbox-node-initials-background"]={path:"styleDefaults/nodeDefaults/iconDefaults/backgroundSize",property:"width"},e["oj-nbox-node-categorylabel"]={path:"styleDefaults/_categoryNodeDefaults/labelStyle",property:"TEXT"},e["oj-nbox-dialog"]=[{path:"styleDefaults/_drawerDefaults/background",property:"background-color"},{path:"styleDefaults/_drawerDefaults/borderColor",property:"border-color"}],e["oj-nbox-dialog-label"]={path:"styleDefaults/_drawerDefaults/labelStyle",property:"TEXT"},e["oj-nbox-dialog-countlabel"]={path:"styleDefaults/_drawerDefaults/countLabelStyle",property:"TEXT"},e},_GetEventTypes:function(){return["optionChange"]},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var e=this.options._resources;e.overflow={class:"oj-fwk-icon oj-fwk-icon-dots-horizontal",width:34,height:9},e.close={class:"oj-fwk-icon oj-fwk-icon-cross",width:16,height:16},e.background_neutral={src:"oj-nbox-node-initials-neutral",width:44,height:44},e.background_teal={src:"oj-nbox-node-initials-teal",width:44,height:44},e.background_red={src:"oj-nbox-node-initials-red",width:44,height:44},e.background_green={src:"oj-nbox-node-initials-green",width:44,height:44},e.background_orange={src:"oj-nbox-node-initials-orange",width:44,height:44},e.background_mauve={src:"oj-nbox-node-initials-mauve",width:44,height:44},e.background_pink={src:"oj-nbox-node-initials-pink",width:44,height:44},e.background_forest={src:"oj-nbox-node-initials-forest",width:44,height:44},e.background_purple={src:"oj-nbox-node-initials-purple",width:44,height:44},e.background_blue={src:"oj-nbox-node-initials-blue",width:44,height:44},e.background_slate={src:"oj-nbox-node-initials-slate",width:44,height:44},e.background_lilac={src:"oj-nbox-node-initials-lilac",width:44,height:44},e.background_gray={src:"oj-nbox-node-initials-gray",width:44,height:44}},getNodeBySubId:function(e){return this._super(e)},getSubIdByNode:function(e){return this._super(e)},_GetComponentNoClonePaths:function(){var e=this._super();return e.data=!0,e.nodes=!0,e},getRowsTitle:function(){return this._component.getAutomation().getData("rowsTitle")},getRowCount:function(){return this._component.getAutomation().getData("rowCount")},getRow:function(e){return this._component.getAutomation().getData("row",e)},getColumnsTitle:function(){return this._component.getAutomation().getData("columnsTitle")},getColumnCount:function(){return this._component.getAutomation().getData("columnCount")},getColumn:function(e){return this._component.getAutomation().getData("column",e)},getCell:function(e,t){var o=this._component.getAutomation(),n=o.getCell(e,t);return n&&(n.getGroupNode=function(e){return o.getCellGroupNode(n,e)},n.getNode=function(e){return o.getCellNode(n,e)}),n},getGroupBehavior:function(){return this._component.getAutomation().getData("groupBehavior")},getGroupNode:function(e){return this._component.getAutomation().getGroupNode(e)},getDialog:function(){var e=this._component.getAutomation(),t=e.getDialog();return t&&(t.getNode=function(t){return e.getDialogNode(t)}),t},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-nbox-tooltip"!==t.subId&&"oj-nbox-dialog-close-button"!==t.subId&&"oj-nbox-overflow"!==t.subId?t:null},_GetComponentDeferredDataPaths:function(){return{root:["cells","rows","columns","nodes","data"]}},_GetSimpleDataProviderConfigs:function(){return{data:{templateName:"nodeTemplate",templateElementName:"oj-n-box-node",resultPath:"nodes"}}}})});
//# sourceMappingURL=ojnbox.js.map