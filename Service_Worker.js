;
//asignar un nombre y versión al cache
const CACHE_NAME = 'Web',
  urlsToCache = [
    './',
    './index.html',
    './gallery.html',
    './contact.html',
    './single.html',
    './archive.html',

    './css/menu.css',
    './css/style.css',
    './css/zerogrid.css',

    './font-awesome/fonts/fontawesome-webfont.ttf',

    './js/app.js',
    './js/script.js',
    './js/jquery1111.min.js',
    './js/css3-mediaqueries.js',
    './js/html5.js',

    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/avatar.jpg',
    './images/slide1.jpg',
    './images/slide2.jpg',
    './images/slide3.jpg',

    

    './Registro_Service_Worker.js',

    './icono/icon-512x512.png',




  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})