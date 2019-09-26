module.exports = {
  transform
} 

function transform(itm){
  return {
    "Name": itm["External ID"],
    "NodeType":"Valve",
    "SourceSystem": "CSVHarvester_CaptainAmerica.csv",
    "Priority": 1,
    "ConformedDimensions": {
      "ExternalID": itm["External ID"]
    },
    "Properties": {
      "Text": itm["Listing Title additional text"],
      "ManufacturerPartNumber": itm["Manufacturer Part Number"],
      "YearBuilt":itm["Year Built"],
      "PASCConditionRating":itm["PASC Condition Rating"],
      "ConditionDetails":itm["Condition Details"],
      "MTR": itm["MTR"],
      "ValveType":itm["Valve Type"],
      "InletSize(\")":itm["Inlet Size (\")"],
      "OutletSize(\")":itm["Outlet Size (\")"],
      "Class(#)":itm["Class (#)"],
      "Manufacturer":itm["Manufacturer"],
      "Model#":itm["Model #"],
      "BodyMaterial": itm["Body Material"],
      "Actuator":itm["Actuator"],
      "ActuatorDetails":itm["Actuator Details"],
      "TrunnionMount":itm["Trunnion Mount"],
      "Trim":itm["Trim"],
      "Ball":itm["Ball"],
      "Stem":itm["Stem"],
      "Ends":itm["Ends"],
      "Seats":itm["Seats"],
      "TempRange":itm["Temp Range"],
      "Pattern":itm["Pattern"],
      "Bore":itm["Bore"],
      "Bonnet":itm["Bonnet"],
      "Disc":itm["Disc"],
      "Port":itm["Port"],
      "OS&Y":itm["OS&Y"],
      "Skidded":itm["Skidded"],
      "Housed":itm["Housed"],
      "OperationalStatus":itm["Operational Status"],
      "LastInspection":itm["Last Inspection"],
      "Warranty":itm["Warranty"],
      "Warranty Details":itm["Warranty Details"],
      "Available":itm["Units Available"],
      "InternalComments":itm["Internal Comments"],
      "DealStatus":itm["Deal Status"],
      "Price":itm["Price"]

    }
  }
}