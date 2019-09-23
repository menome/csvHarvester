module.exports = {
  transform
} 

function transform(itm){
  return {
    "Name": itm.SKU,
    "NodeType":"Valve",
    "SourceSystem": "CSVHarvester",
    "Priority": 1,
    "ConformedDimensions": {
      "SKU": itm.SKU
    },
    "Properties": {
      "Description": itm.Description,
      "Available": itm["Surplus Quantity"],
      "PartValue":itm["Value / Part ($)"],
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