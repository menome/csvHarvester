module.exports = {
  transform
} 

function transform(itm){
  return {
    "Name": itm.SKU,
    "NodeType":"Valve",
    "SourceSystem": "CSVHarvester_Batman.csv",
    "Priority": 1,
    "ConformedDimensions": {
      "ExternalID": itm.SKU
    },
    "Properties": {
      "Text": itm.Description,
      "Available": itm["Surplus Quantity"],
      "Price":itm["Value / Part ($)"],
      "TotalValue":itm.Value,
      "Turns":itm.Turns

    },
    "Connections":[
      {
        "NodeType": "SiteLocation",
        "RelType": "AT_SITE_LOCATION",
        "ForwardRel": true,
        "ConformedDimensions": {
          "SiteLocation":itm["Site Location of Surplus Part"]
        },
        "Properties": {

        }
      }
    ]
  }
}