module.exports = {
    transform
  } 
  
  function transform(itm){
    return {
      "Name": itm.hello,
      "NodeType":"fart",
      "SourceSystem": "CSV-Harvester",
      "Priority": 1,
      "ConformedDimensions": {
        "id": itm.time
      },
      "Properties": {

      },
      "Connections":[
        {
          "NodeType": "Section",
          "RelType": "IN_SECTION",
          "ForwardRel": true,
          "ConformedDimensions": {
            "sectionId": itm.fart
          },
          "Properties": {

          }
        }
      ]
    }
  }