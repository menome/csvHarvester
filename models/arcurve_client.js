module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.Client,
    "NodeType":"Client",
    "SourceSystem": "OpenAir",
    "Priority": 1,
    "ConformedDimensions": {
        "Code": itm.Client
      },
      "Properties": {
        
    },
  
    "Connections":[
     
     
    ]
  }
}