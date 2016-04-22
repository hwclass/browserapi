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

   return {
      get(name) {
        const apis = {
          fetch: (instance) => {
            if(!!window.fetch) {
              instance(window.fetch);
            }
          },
          fullScreen: (element, instance) => {
            const fullScreen = null;
            if(element.requestFullscreen) {
              fullScreen = element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
              fullScreen = element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
              fullScreen = element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
              fullScreen = element.msRequestFullscreen();
            }
            return instance(fullScreen);
          },
          battery: (instance) => {
            if (!!navigator.getBattery) {
              navigator.getBattery().then((battery) => {
                instance(battery);
              })
            }
          },
          serviceWorker: (instance) => {
            if(!!navigator.serviceWorker) {
              instance(navigator.serviceWorker);
            }
          }
        }
        return apis[name];
      }
    }   

})();
