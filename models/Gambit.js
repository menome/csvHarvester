module.exports = {
    transform
  } 
  function transform(itm){
    return {
      "Name": itm["Item"] + ' ' + itm["Tag #"],
      "NodeType":itm["Item"],
      "SourceSystem": "CSVHarvester_Ironman.csv",
      "Priority": 1,
      "ConformedDimensions": {
        "SourceSystem": "CSVHarvester_Ironman.csv",
        "SupplierID": itm["Supplier ID"],
        "MaximoItemNumber": itm["MAXIMO ITEM#"]
      },
      "Properties": {
        "Description": itm["Desription"],
        "Tag":itm["Tag #"]
      },
        {
          "NodeType": "Type",
          "RelType": "Type",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Code":itm["Type"]
          },
          "Properties": {
    
          }
        }
      ]
    }
  }