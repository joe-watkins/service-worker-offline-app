var cacheName = "sw-demo",
		filesToCache = [
			'/',
			'/index.html',
			'/detail-page.html',
			'/scripts/main.js',
			'/images/donut.jpg'
		]

// add polyfill for caching
importScripts('/cache-polyfill.js');

// add event listener for the "Install" phase
self.addEventListener("install", function(e){

	// open the caches object and add all the files we want to store
	// if any fail the whole thing fails
	// here we've named it static-v1
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache) // addAll()
		}) // .open()
	); // waitUntil

}); // install

// listen for a request
// intercept and check cache
self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	)
});
