module.exports = {
    transform
  } 
  
  function transform(itm){
    return {
      "Name": itm.Material,
      "NodeType":"Valve",
      "SourceSystem": "CSVHarvester_Aquaman.csv",
      "Priority": 1,
      "ConformedDimensions": {
        "SourceSystem": "CSVHarvester_Aquaman.csv",
        "Material": itm.Material
      },
      "Properties": {
        "Description": itm.Description,
        "Available": itm.Available,
        "LocationText":itm["Location Text"],
        "TrackingCd":itm["Tracking Cd"],
        "Text":itm.Text
      },
      "Connections":[
        {
          "NodeType": "UOM",
          "RelType": "UOM",
          "ForwardRel": true,
          "ConformedDimensions": {
            "UOM": itm.UOM
          },
          "Properties": {

          }
        },
        {
          "NodeType": "Area",
          "RelType": "IN_AREA",
          "ForwardRel": true,
          "ConformedDimensions": {
            "UOM": itm.Area
          },
          "Properties": {

          }
        },
        {
          "NodeType": "Section",
          "RelType": "IN_SECTION",
          "ForwardRel": true,
          "ConformedDimensions": {
            "UOM": itm.Section
          },
          "Properties": {

          }
        },
        {
          "NodeType": "Bin",
          "RelType": "IN_BIN",
          "ForwardRel": true,
          "ConformedDimensions": {
            "UOM": itm.Bin
          },
          "Properties": {

          }
        },
        {
          "NodeType": "Manufacturer",
          "RelType": "MANUFACTURED_BY",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Name":itm["MANUFACTURER"]
          },
          "Properties": {
    
          }
        }
      ]
    }
  }