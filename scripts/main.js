var enableServiceWorker = true;

if("serviceWorker" in navigator && enableServiceWorker){
	navigator.serviceWorker.register("sw.js").then(function() {
		console.log("Service Worker Registered!!!");
	});
}
