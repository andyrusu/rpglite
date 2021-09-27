
shadow.cljs.devtools.client.env.module_loaded('index');

try { rpglite.index.init(); } catch (e) { console.error("An error occurred when calling (rpglite.index/init)"); throw(e); }