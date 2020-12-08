module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.Task,
    "NodeType":"Task",
    "SourceSystem": "OpenAir",
    "Priority": 1,
    "ConformedDimensions": {
        "Code": itm.Task
      },
      "Properties": {

    },
    "Connections":[
     
     
    ]
  }
}