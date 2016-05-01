# browserapi
A wrapper tool for next generation browser apis like vibration, fullscreen, and etc.

###Supported APIs

- [x] Geolocation
- [x] fetch
- [x] Fullscreen API
- [x] Battery
- [x] ServiceWorker

####Geolocation
```javascript
browserapi.get('geolocation')((geolocation) => {
  geolocation.getCurrentPosition(function (data) {
    console.dir(data); //successfully get the Geoposition data
  }, function (err) {
    console.dir(err); // logs the error stack
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }); //options while getting geolocation data
});
```

####fetch
```javascript
browserapi.get('fetch')((fetch) => {
  fetch(new Request('<URL>')).then(function (data) {
    console.dir(data);
  });
});
```

#####Fullscreen API
```javascript
browserapi.get('fullScreen')(document.querySelector('body'), (fullScreen) => {
  console.dir(fullScreen);
});
```
#####Note : This method invocation prints "Failed to execute 'requestFullScreen' on 'Element': API can only be initiated by a user gesture.". Since the security concerns, it only can be triggered by a user event like click or etc. 

####Battery
```javascript
browserapi.get('battery')((battery) => {
  console.dir(battery);
});
```

####ServiceWorker
```javascript
browserapi.get('serviceWorker')((serviceWorker) => {
  console.dir(instance);
});
```

####localStorage
```javascript
browserapi.get('localStorage')((localStorage) => {
   localStorage.setItem('some_data', '{some_data : "yes, cool..."}');
   console.dir(localStorage.getItem('some_data'));
});
```

####deviceOrientation
```javascript
browserapi.get('deviceOrientation')((deviceOrientation) => {
   console.dir(deviceOrientation);
});
```