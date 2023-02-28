function importFastData() {
  try {
    const url = 'https://fastheroes.com/wp-json/cf/get_followup_survey_questionaire';

    const res = UrlFetchApp.fetch(url, {
      'headers': {
        'CFGOOGLELOOKER-KEY': '****ENTER-API-KEY-HERE****'
      }
    }).getContentText();

    var json = JSON.parse(res);

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
}


function storeData() {
  var data = importFastData();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i = 0; i < data.length; i++) {
    sheet[0].appendRow(data[i]);
  }
}

function getTable(json) {
  var table = json.map(row => {
    var result = [];
    for (var col in row) {
      var a = 'b';
      if (Array.isArray(row[col])) {
        var list = row[col].join();
        result.push(list)
      }
      else {
        result.push(row[col])
      }
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
