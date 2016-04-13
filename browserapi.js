var browserapi = (function () {
   
   let fullScreenApi;

   return {
      getFullScreenApi: (element) => {
         let instance = null;
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
      getBattery : () => {
         navigator.getBattery().then((battery) => {
            return battery;
         })
      }
   }   

})();
