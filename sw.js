self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/restaurant.html',
                '/data/restaurants.json',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/css/styles.css',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'


            ]);
        })
    );
});



self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open('r2').then( cache => {
			return caches.match(event.request).then( response => {
				return response || fetch(event.request).then( response => {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
