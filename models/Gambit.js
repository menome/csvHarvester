module.exports = {
    transform
  } 
  function transform(itm){
    var msg = {
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
      "Connections":[
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
    // itm["Desription"].split(",").map(function(facet){
    //   //console.log(facet)
    //   msg.Connections.push({
    //       "NodeType": "Facet",
    //       "RelType": "HAS_FACET",
    //       "ForwardRel": true,
    //       "ConformedDimensions": {
    //         "Key":facet.trim().replace('"','\\"')
    //       },
    //       "Properties": {
    
    //       }
    //     })
    // })
    return msg
  }