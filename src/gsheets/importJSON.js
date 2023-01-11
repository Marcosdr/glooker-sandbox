function IMPORTJSON(url, xpath){
    // https://dummyjson.com/products?limit=10&skip=10&select=title,price,category
  
    try {
      const res = UrlFetchApp.fetch(url).getContentText();
      var json = JSON.parse(res);
  
      var patharray = xpath.split("/");
  
      for (var i=0;i<patharray.length;i++) {
        json = json[patharray[i]];
      }
  
      if (typeof(json) == "undefined") {
        return "Node not available";
      }
      else if (typeof(json) === "object") {
        return getTable(json);
      }
      else {
        return json
      }
  
    }
    catch(err) {
      return "Error getting data.";
    }
    
    
    function getTable(json) {
      var table = json.map(row => {
        var result = [];
        for (var col in row) {
          result.push(row[col])
        }
        return result;
      })
      table.unshift(getHeaders(json))
      return table
    }
  
    function getHeaders(json) {
      var headers = [];
      for (var el in json[0]) {
        headers.push(el);
      }
      return headers;
    }
  }