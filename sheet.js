// create an spread sheet

function create(title, callback) {
  try {
    gapi.client.sheets.spreadsheets.create({
      properties: {
        title: title,
      },
    }).then((response) => {
      if (callback) callback(response);
      console.log('Spreadsheet ID: ' + response.result.spreadsheetId);
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
}

// Read a single range

function getValues(spreadsheetId, range, callback) {
  try {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    }).then((response) => {
      const result = response.result;
      const numRows = result.values ? result.values.length : 0;
      console.log(`${numRows} rows retrieved.`);
      if (callback) callback(response);
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
}

// Read multiple ranges

function batchGetValues(spreadsheetId, _ranges, callback) {
  let ranges = [
    // Range names ...
  ];
  ranges = _ranges;
  try {
    gapi.client.sheets.spreadsheets.values.batchGet({
      spreadsheetId: spreadsheetId,
      ranges: ranges,
    }).then((response) => {
      const result = response.result;
      console.log(`${result.valueRanges.length} ranges retrieved.`);
      if (callback) callback(response);
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
}