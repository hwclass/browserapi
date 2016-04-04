var browserapi = (function () {
   
   var fullScreenApi;

   return {
      getFullScreenApi: function (element) {
         var instance = null;
        if(element.requestFullscreen) {
          instance = element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
          instance = element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
          instance = element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
          instance = element.msRequestFullscreen();
        }
        return instance;
      },
      getBattery : function () {
         var instance = null;
         navigator.getBattery().then(function (battery) {
            return battery;
         })
      }
   }   

})();
