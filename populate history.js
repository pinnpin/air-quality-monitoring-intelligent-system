function historyRepeatsItself() {
  const key = "YOUR_BREEZOMETER_KEY"
  const ss = SpreadsheetApp.openById("YOUR_SHEETS_ID")
  const wsHistoria = ss.getSheetByName("histórico")
  
  let apiURL = "https://api.breezometer.com/air-quality/v2/historical/hourly?lat=50.4500336&lon=30.5241361&key=YOUR_BREEZOMETER_KEY&start_datetime=2022-03-02T23:00:00&end_datetime=2022-03-06T23:00:00&features=pollutants_concentrations,dominant_pollutant_concentrations,breezometer_aqi"
  //console.log(apiURL)


  const resText = UrlFetchApp.fetch(apiURL).getContentText()
  const resJSON = JSON.parse(resText)
  let b = 17;
  

  for (let i = 0; i <= 168; i += 24) {

  const celldatetime = wsHistoria.getRange("A"+b)
  const cellco = wsHistoria.getRange("B"+b)
  const cellno2 = wsHistoria.getRange("C"+b)
  const cello3 = wsHistoria.getRange("D"+b)
  const cellpm10 = wsHistoria.getRange("E"+b)
  const cellpm25 = wsHistoria.getRange("F"+b)
  const cellso2 = wsHistoria.getRange("G"+b) 
  const cellaqi = wsHistoria.getRange("J"+b)
  const celldominant_pollutant1 = wsHistoria.getRange("M"+b)

  b = b + 1;

  const datetime = resJSON["data"][i]["datetime"]
  const co = resJSON["data"][i]["pollutants"]["co"]["concentration"]["value"]
  const no2 = resJSON["data"][i]["pollutants"]["no2"]["concentration"]["value"]
  const o3 = resJSON["data"][i]["pollutants"]["o3"]["concentration"]["value"]
  const pm10 = resJSON["data"][i]["pollutants"]["pm10"]["concentration"]["value"]
  const pm25 = resJSON["data"][i]["pollutants"]["pm25"]["concentration"]["value"]
  const so2 = resJSON["data"][i]["pollutants"]["so2"]["concentration"]["value"]
  const aqi = resJSON["data"][i]["indexes"]["baqi"]["aqi"]
  const dominant_pollutant1 = resJSON["data"][i]["indexes"]["baqi"]["dominant_pollutant"]

  
  
  celldatetime.setValue(datetime)
  cellco.setValue(co)
  cellno2.setValue(no2)
  cello3.setValue(o3)
  cellpm10.setValue(pm10)
  cellpm25.setValue(pm25)
  cellso2.setValue(so2)
  cellaqi.setValue(aqi)
  celldominant_pollutant1.setValue(dominant_pollutant1)


  }

}
