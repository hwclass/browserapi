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

;var browserapi = (function () {
   return {
      get(name) {
        const apis = {
          
          /**
          * Geolocation : The HTML Geolocation API is used to locate a user's position.
          * @param {function} instance
          */
          geolocation: (instance) => {
            if ("geolocation" in navigator) {
              instance(navigator.geolocation)
            }
          },
   
          /**
          * fetch : The fetch API is used to do requests and send responses.
          * @param {function} instance
          */
          fetch: (instance) => {
            if(!!window.fetch) {
              instance(window.fetch);
            }
          },

          /**
          * fullScreen : The fullScreen API is used to make some canvas to be fully-widened
          * @param {function} instance
          */
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

          /**
          * battery : The battery API is used to get the current status of the battery
          * @param {function} instance
          */
          battery: (instance) => {
            if (!!navigator.getBattery) {
              navigator.getBattery().then((battery) => {
                instance(battery);
              })
            }
          },

          /**
          * serviceWorker : The serviceWorker API is used to make some job done in the background
          * @param {function} instance
          */
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
