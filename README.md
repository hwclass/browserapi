# browserapi
A wrapper tool for next generation browser apis like vibration, fullscreen, and etc.

###Supported APIs

- [x] fetch
#####usage
```browserapi.get('fetch')((fetch) => {
   console.dir(fetch);
})```

- [x] Fullscreen API
#####usage
```browserapi.get('fullScreen')(document.querySelector('<element>'), (fullScreen)=>{
   console.dir(fullScreen);
})```
#####Note : This method invocation prints "Failed to execute 'requestFullScreen' on 'Element': API can only be initiated by a user gesture.". Since the security concerns, it only can be triggered by a user event like click or etc. 

- [x] Battery
#####usage
```browserapi.get('battery')((battery) => {
   console.dir(battery);
})```

- [x] ServiceWorker
#####usage
```browserapi.get('serviceWorker')((serviceWorker) => {
  console.dir(instance);
})```