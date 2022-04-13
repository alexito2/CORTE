//console.log("Hola desde Service Worker UTVAM");

self.addEventListener('install', event => {
  //console.log("Hola desde la intalación del Service Worker UTVAM");
  
  //caches.open( "Espacio 1" );
  //caches.delete("Espacio 2");
  self.skipWaiting();
});

self.addEventListener('activate', event => {
 console.log("Hola desde la Activación del Service Worker UTVAM");
});


self.addEventListener('fetch' , event => {
 event.respondWith( fetch(event.request) );  

 if( event.request.url.includes('http://localhost:8080/images/')){
  // console.log(event.request.url);
 }  
});

self.addEventListener('sync', event => {
 
 console.log("Recuperando conexion....");

});

self.addEventListener('push', event => {
 
 console.log("Notificado....");

});
