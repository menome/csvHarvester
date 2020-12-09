module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.User + ' ' + itm.Date,
    "NodeType":"Work",
    "SourceSystem": "OpenAir",
    "Priority": 1,
    "ConformedDimensions": {
        "DateWorked": itm.Date,
        "User": itm.UserID,
        "Task": itm.TaskID
      },
      "Properties": {
        "Notes": itm.Notes,
        "Hours": parseFloat(itm.Time)
    },
    "Connections":[
      {
        "NodeType": "Task",
        "RelType": "WORKED",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Code": itm.TaskID,
          "ProjectCode": itm.ProjectID
        },
        "Properties": {
          "Name":itm.Task
        }
      },
   
     
    ]
  }
}