var chromep = {}

chromep.runtime = (function(){

  function sendMessage(extensionId, message, options){
    return new Promise(function(resolve, reject){
      chrome.runtime.sendMessage(extensionId, message, options, function(response){
        resolve(response);
      });
    });
  }

  return {
    sendMessage : sendMessage
  };

});

chromep.tabs = (function(){

  function executeScript(tabId, injectDetails){
    return new Promise(function(resolve, reject){
      if(typeof(tabId) == "string" || typeof(tabId) == "number"){
        chrome.tabs.executeScript(tabId, injectDetails, function(result){
          resolve(result);
        });
      }else{
        chrome.tabs.executeScript(tabId, function(result){
          resolve(result);
        });
      }
    });
  }

  function get(tabId){
    return new Promise(function(resolve, reject){
      chrome.tabs.get(tabId, function(tab){
        resolve(tab);
      })
    });
  }

  function getCurrent(){
    return new Promise(function(resolve, reject){
      chrome.tabs.getCurrent(function(tab){
        resolve(tab);
      })
    });
  }

  function create(createOptions){
    return new Promise(function(resolve, reject){
      chrome.tabs.create(createOptions, function(tab){
        resolve(tab);
      })
    });
  }

  function query(queryOptions){
    return new Promise(function(resolve, reject){
      chrome.tabs.query(queryOptions, function(tabs){
        resolve(tabs);
      })
    });
  }

  return {
    get : get,
    create : create,
    query : query,
    getCurrent : getCurrent,
    executeScript : executeScript
  }
})();