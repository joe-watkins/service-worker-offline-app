# Offline App Example

A service worker is a script ran by the browser that works in the background separate from a webpage. This enables such technology on the web as push notifications, background sync, geofencing, offline apps/sites.

## Offline App Example
- Register a service worker if available
- Add a list of files to the cache
- Service worker listens for requests and responds to them - even jump in front of

## Service Worker vs. AppCache
1. Service Worker (SW) is better for multi-page websites
2. Portions of the cache can be updated
3. AppCache always loaded content from the cache even if online
4. SW lets you intercept network requests.
5. SW requires HTTPS
6. SW takes advantage of JavaScript promises and is async
7. SW works well with Progressive Enhancement approach -- detect support and register SW

## Handy Urls
 - chrome://serviceworker-internals/
