// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/tools/SelectionTools",["dojo/_base/lang","dojo/has","../../../layers/FeatureLayer","../../../toolbars/draw","../../../kernel"],function(c,d,a,b,e){a={select:{id:"btnNewSelection",_enabledIcon:"toolbarIcon newSelectionIcon",_disabledIcon:"toolbarIcon newSelectionIcon",_drawType:b.EXTENT,_selectMethod:a.SELECTION_NEW,_label:"NLS_selectionNewLbl"},selectadd:{id:"btnAddToSelection",_enabledIcon:"toolbarIcon addToSelectionIcon",_disabledIcon:"toolbarIcon addToSelectionIcon",
_drawType:b.EXTENT,_selectMethod:a.SELECTION_ADD,_label:"NLS_selectionAddLbl"},selectremove:{id:"btnSubtractFromSelection",_enabledIcon:"toolbarIcon removeFromSelectionIcon",_disabledIcon:"toolbarIcon removeFromSelectionIcon",_drawType:b.EXTENT,_selectMethod:a.SELECTION_SUBTRACT,_label:"NLS_selectionRemoveLbl"},selectClear:{id:"btnClearSelection",_enabledIcon:"toolbarIcon clearSelectionIcon",_disabledIcon:"toolbarIcon clearSelectionIcon",_enabled:!1,_label:"NLS_selectionClearLbl"}};d("extend-esri")&&
c.setObject("dijit.editing.tools.SelectionTools",a,e);return a});