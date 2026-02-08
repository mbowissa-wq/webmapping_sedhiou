const CACHE_NAME = 'webmapping-sedhiou-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './css/leaflet.css',
  './css/L.Control.Locate.min.css',
  './css/qgis2web.css',
  './css/fontawesome-all.min.css',
  './css/MarkerCluster.css',
  './css/MarkerCluster.Default.css',
  './css/leaflet.photon.css',
  './css/leaflet-measure.css',
  './js/leaflet.js',
  './js/L.Control.Locate.min.js',
  './js/leaflet.markercluster.js',
  './js/leaflet-measure.js',
  './js/leaflet.photon.js',
  './data/Sedhiou_1.js',
  './data/Departement_sedhiou_2.js',
  './data/Arrondissement_sedhiou_3.js',
  './data/Hydrographie_sedhiou_4.js',
  './data/Route_sedhiou_5.js',
  './data/Localite_sedhiou_6.js',
  './data/Ecole_sedhiou_7.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});