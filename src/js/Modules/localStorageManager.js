
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '{"type": "type"}';
      storage.setItem(x, x);
      storage.removeItem(x);
      // storage.clear()
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function storeData(key, data) {
  if(storageAvailable('localStorage')) {
    localStorage.setItem(key, JSON.stringify(data));
  }else{
    console.log("Local storage not available");
  }
}
function getData(key) {
  if(storageAvailable('localStorage')) {
    return JSON.parse(localStorage.getItem(key));
  }else{
    console.log("Local storage not available");
  }
}

export { storeData, getData };