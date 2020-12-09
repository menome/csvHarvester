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
        "Code": itm.ProjectID
      },
      "Properties": {
        "Client": itm.ProjectClient,
        "Status": itm.ProjectActive
    },
    "Connections":[
      {
        "NodeType": "Client",
        "RelType": "HAS",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Code": itm.ClientID
        },
        "Properties": {
          
        }
      },
        {
          "NodeType": "Task",
          "RelType": "HAS",
          "ForwardRel": true,
          "ConformedDimensions": {
            "Code": itm.TaskID,
            "ProjectCode": itm.ProjectID
          },
          "Properties": {
         
          }
        },
    ]
  }
}