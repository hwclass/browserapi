# browserapi
A wrapper tool for next generation browser apis like vibration, fullscreen, and etc.

###Supported APIs

- [x] Fullscreen API

- [x] Battery

- [x] ServiceWorker

####usage
```browserapi.get('serviceWorker')((instance) => {
  console.dir(instance);
})```