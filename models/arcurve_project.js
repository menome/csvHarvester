module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.Project,
    "NodeType":"Project",
    "SourceSystem": "OpenAir",
    "Priority": 1,
    "ConformedDimensions": {
        "Code": itm.Project
      },
      "Properties": {
        "Client": itm.ProjectClient
    },
    "Connections":[
      {
        "NodeType": "Client",
        "RelType": "HAS",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Code": itm.Client
        },
        "Properties": {
          
        }
      },
        {
          "NodeType": "Task",
          "RelType": "HAS",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Code": itm.Task
          },
          "Properties": {
         
          }
        },
    ]
  }
}