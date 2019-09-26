module.exports = {
    transform
  } 
  
  function transform(itm){
    return {
      "Name": itm["Material"],
      "NodeType":"Valve",
      "SourceSystem": "CSVHarvester_Ironman",
      "Priority": 1,
      "ConformedDimensions": {
        "ExternalID": itm["Material"]
      },
      "Properties": {
        "MaterialDescription": itm["Material Description"],
        "Active":itm["Active/Inactive"],
        "Available":itm["Stock Quantity"],
        "MFRPartNumber":itm["Mfr Part Number"],
        "PlantDescription":itm["Plant Description"],
        "MRPDescription":itm["MRP Controller Desc"]
      },
      "Connections":[
        
        {
          "NodeType": "Manufacturer",
          "RelType": "MANUFACTURED_BY",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Name":itm["Manufact Name"]
          },
          "Properties": {
    
          }
        }
      ]
    }
  }