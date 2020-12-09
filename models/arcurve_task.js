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
        "Code": itm.TaskID,
        "ProjectCode": itm.ProjectID
      },
      "Properties": {
        "Task Manager": itm.TaskProjectManager
    },
    "Connections":[
     
     
    ]
  }
}