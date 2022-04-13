//confirmar si soporta sw
if ( navigator.serviceWorker ){
  //alert("Soporta el SW");
  navigator.serviceWorker.register("/sw.js");
}
else{
  alert(":( no soporta el SW");
}






//if ('serviceWorker' in navigator) {
  //  window.addEventListener('load', function() {
    //  navigator.serviceWorker.register('/sw.js')
      //  .then(function() {
        //    console.log('ServiceWorker registered!');
        //})
        //.catch(function(err) {
          //  console.log('ServiceWorker failed :(', err);
       // });
   // });
  //}