function getForecast() {
  const key = "YOUR_BREEZOMETER_KEY" //key do API breezometer
  const ss = SpreadsheetApp.openById("YOUR_SHEETS_ID") //abrir Sheets
  const wsForecast = ss.getSheetByName("forecast")

  //const user = wsFolha1 = ss.getRange("H1").getValue()
  
  const celldatetime24 = wsForecast.getRange("A2")
  const cellaqi24 = wsForecast.getRange("B2")
  const cellcolor24 = wsForecast.getRange("C2")
  const cellcategory24 = wsForecast.getRange("D2")
  const celldominant_pollutant24 = wsForecast.getRange("E2")

  const celldatetime48 = wsForecast.getRange("F2")
  const cellaqi48 = wsForecast.getRange("G2")
  const cellcolor48 = wsForecast.getRange("H2")
  const cellcategory48 = wsForecast.getRange("I2")
  const celldominant_pollutant48 = wsForecast.getRange("J2")
  
  let apiURL = "https://api.breezometer.com/air-quality/v2/forecast/hourly?lat=50.4500336&lon=30.5241361&key=YOUR_BREEZOMETER_KEY&hours=96"
  //console.log(apiURL)

  const resText = UrlFetchApp.fetch(apiURL).getContentText()
  const resJSON = JSON.parse(resText)

  const datetime24 = resJSON["data"]["24"]["datetime"]
  const aqi24 = resJSON["data"]["24"]["indexes"]["baqi"]["aqi"]
  const color24 = resJSON["data"]["24"]["indexes"]["baqi"]["color"]
  const category24 = resJSON["data"]["24"]["indexes"]["baqi"]["category"]
  const dominant_pollutant24 = resJSON["data"]["24"]["indexes"]["baqi"]["dominant_pollutant"]

  const datetime48 = resJSON["data"]["48"]["datetime"]
  const aqi48 = resJSON["data"]["48"]["indexes"]["baqi"]["aqi"]
  const color48 = resJSON["data"]["48"]["indexes"]["baqi"]["color"]
  const category48 = resJSON["data"]["48"]["indexes"]["baqi"]["category"]
  const dominant_pollutant48 = resJSON["data"]["48"]["indexes"]["baqi"]["dominant_pollutant"]


  
  celldatetime24.setValue(datetime24)
  cellaqi24.setValue(aqi24)
  cellcolor24.setValue(color24)
  cellcategory24.setValue(category24)
  celldominant_pollutant24.setValue(dominant_pollutant24)

  celldatetime48.setValue(datetime48)
  cellaqi48.setValue(aqi48)
  cellcolor48.setValue(color48)
  cellcategory48.setValue(category48)
  celldominant_pollutant48.setValue(dominant_pollutant48)


}
