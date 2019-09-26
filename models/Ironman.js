module.exports = {
    transform
  } 
  
  function transform(itm){
    return {
      "Name": itm["Material"],
      "NodeType":"Valve",
      "SourceSystem": "CSVHarvester_Ironman.csv",
      "Priority": 1,
      "ConformedDimensions": {
        "SourceSystem": "CSVHarvester_Ironman.csv",
        "Material": itm["Material"]
      },
      "Properties": {
        "Text": itm["Material Description"],
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