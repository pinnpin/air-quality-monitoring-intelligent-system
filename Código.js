function getCurrentData() {
  const key = "YOUR_BREEZOMETER_KEY" //key do API breezometer
  const ss = SpreadsheetApp.openById("YOUR_SHEETS_ID") //abrir Sheets
  const wsFolha1 = ss.getSheetByName("index_atual")
  const wsHistoria = ss.getSheetByName("histórico")
  
  const celldatetime = wsFolha1.getRange("A2")
  const cellco = wsFolha1.getRange("B2")
  const cellno2 = wsFolha1.getRange("C2")
  const cello3 = wsFolha1.getRange("D2")
  const cellpm10 = wsFolha1.getRange("E2")
  const cellpm25 = wsFolha1.getRange("F2")
  const cellso2 = wsFolha1.getRange("G2") 
  const cellgeneral_population = wsFolha1.getRange("H2")
  const cellelderly = wsFolha1.getRange("H3")
  const celllung_diseases = wsFolha1.getRange("H4")
  const cellheart_diseases = wsFolha1.getRange("H5")
  const cellactive = wsFolha1.getRange("H6")
  const cellpregnant_women = wsFolha1.getRange("H7")
  const cellchildren = wsFolha1.getRange("H8")
  const celleffects = wsFolha1.getRange("I2")
  const cellaqi = wsFolha1.getRange("J2")
  const cellcolor = wsFolha1.getRange("K2")
  const cellcategory = wsFolha1.getRange("L2")
  const celltitlegeneral_population = wsFolha1.getRange("M2")
  const celltitleelderly = wsFolha1.getRange("M3")
  const celltitlelung_diseases = wsFolha1.getRange("M4")
  const celltitleheart_diseases = wsFolha1.getRange("M5")
  const celltitleactive = wsFolha1.getRange("M6")
  const celltitlepregnant_women = wsFolha1.getRange("M7")
  const celltitlechildren = wsFolha1.getRange("M8")
  const celldominant_pollutant = wsFolha1.getRange("N2")

  let apiURL = "https://api.breezometer.com/air-quality/v2/current-conditions?lat=50.4500336&lon=30.5241361&key=YOUR_BREEZOMETER_KEY&features=pollutants_concentrations,health_recommendations,sources_and_effects,breezometer_aqi,dominant_pollutant_concentrations"
  //console.log(apiURL)

  const resText = UrlFetchApp.fetch(apiURL).getContentText()
  const resJSON = JSON.parse(resText)
  const datetime = resJSON["data"]["datetime"]
  const co = resJSON["data"]["pollutants"]["co"]["concentration"]["value"]
  const no2 = resJSON["data"]["pollutants"]["no2"]["concentration"]["value"]
  const o3 = resJSON["data"]["pollutants"]["o3"]["concentration"]["value"]
  const pm10 = resJSON["data"]["pollutants"]["pm10"]["concentration"]["value"]
  const pm25 = resJSON["data"]["pollutants"]["pm25"]["concentration"]["value"]
  const so2 = resJSON["data"]["pollutants"]["so2"]["concentration"]["value"]
  const general_population = resJSON["data"]["health_recommendations"]["general_population"]
  const elderly = resJSON["data"]["health_recommendations"]["elderly"]
  const lung_diseases = resJSON["data"]["health_recommendations"]["lung_diseases"]
  const heart_diseases = resJSON["data"]["health_recommendations"]["heart_diseases"]
  const active = resJSON["data"]["health_recommendations"]["active"]
  const pregnant_women = resJSON["data"]["health_recommendations"]["pregnant_women"]
  const children = resJSON["data"]["health_recommendations"]["children"]

  //const effects = resJSON
  const aqi = resJSON["data"]["indexes"]["baqi"]["aqi"]
  const color = resJSON["data"]["indexes"]["baqi"]["color"]
  const category = resJSON["data"]["indexes"]["baqi"]["category"]
  const title = "General Population"
  const title1 = "Elderly"
  const title2 = "Lung Diseases"
  const title3 = "Heart Diseases"
  const title4 = "Active"
  const title5 = "Pregnant Women"
  const title6 = "Children"
  const dominant_pollutant = resJSON["data"]["indexes"]["baqi"]["dominant_pollutant"]




  
  celldatetime.setValue(datetime)
  cellco.setValue(co)
  cellno2.setValue(no2)
  cello3.setValue(o3)
  cellpm10.setValue(pm10)
  cellpm25.setValue(pm25)
  cellso2.setValue(so2)
  cellgeneral_population.setValue(general_population)
  cellelderly.setValue(elderly)
  celllung_diseases.setValue(lung_diseases)
  cellheart_diseases.setValue(heart_diseases)
  cellactive.setValue(active)
  cellpregnant_women.setValue(pregnant_women)
  cellchildren.setValue(children)
  //celleffects
  cellaqi.setValue(aqi)
  cellcolor.setValue(color)
  cellcategory.setValue(category)
  celltitlegeneral_population.setValue(title)
  celltitleelderly.setValue(title1)
  celltitlelung_diseases.setValue(title2)
  celltitleheart_diseases.setValue(title3)
  celltitleactive.setValue(title4)
  celltitlepregnant_women.setValue(title5)
  celltitlechildren.setValue(title6)
  celldominant_pollutant.setValue(dominant_pollutant)


  wsHistoria.appendRow([datetime,co,no2,o3,pm10,pm25,so2,"null","null",aqi,color,category, dominant_pollutant])
}