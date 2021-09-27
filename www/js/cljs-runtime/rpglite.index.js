goog.provide('rpglite.index');
rpglite.index.root = document.getElementById("app");
rpglite.index.init = (function rpglite$index$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpglite.scenes.menu.show], null),rpglite.index.root);
});
rpglite.index.start = (function rpglite$index$start(){
console.log("Initializing app...");

return rpglite.index.init();
});
rpglite.index.stop = (function rpglite$index$stop(){
console.log("Unmounting app...");

return reagent.dom.unmount_component_at_node(rpglite.index.root);
});

//# sourceMappingURL=rpglite.index.js.map
