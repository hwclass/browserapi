# browserapi
A wrapper tool for next generation browser apis like vibration, fullscreen, and etc.

###Supported APIs

- [x] Fullscreen API

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