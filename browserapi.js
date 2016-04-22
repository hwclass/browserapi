/*!
 * browserapi.js. A simple wrapper for browser apis.
 *
 * Copyright (c) 2015 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : April 2016
 * Version : 0.1.0
 * Released: April 5th, 2016
 *
 *
 * Provides a middleware for new browser api interfaces.
 */

var browserapi = (function () {
   
   const fullScreenApi = null;

   return {
      get(name) {
        const apis = {
          fullScreenApi : (element) => {
            const instance = null;
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
          battery : () => {
            if (!!navigator.battery) {
              return navigator.getBattery().then((battery) => {
                return callback(battery);
              });
            }
          },
          serviceWorker : (instance) => {
            if(!!navigator.serviceWorker) {
              instance(navigator.serviceWorker);
            }
          }
        }
        return apis[name];
      }
    }   

})();
