module.exports = {
    transform
  } 
  
  function transform(itm){
    return {
      "Name": itm["Material"],
      "NodeType":"Valve",
      "SourceSystem": "CSVHarvester",
      "Priority": 1,
      "ConformedDimensions": {
        "Material": itm["Material"]
      },
      "Properties": {
        "MaterialDescription": itm["Material Description"],
        "Active":itm["Active/Inactive"],
        "Available":itm["Stock Quantity"],
        "MFRPartNumber":itm["Mfr Part Number"]
  
      },
      "Connections":[
        {
          "NodeType": "Plant",
          "RelType": "PLANT_DESCRIPTION",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Description":itm["Plant Description"]
          },
          "Properties": {
  
          }
        },
        {
          "NodeType": "MRPController",
          "RelType": "MRP_CONTROLLER_DESCRIPTION",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Description":itm["MRP Controller Desc"]
          },
          "Properties": {
    
          }
        },
        {
          "NodeType": "Manufacturer",
          "RelType": "MANUFACTURED_BY",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Name":itm["Manufact. Name"]
          },
          "Properties": {
    
          }
        }
      ]
    }
  }