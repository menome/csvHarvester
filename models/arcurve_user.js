module.exports = {
    transform
  } 

function transform(itm){
   return {
    "Name": itm.User,
    "NodeType":"Person",
    "SourceSystem": "OpenAir",
    "Priority": 1,
    "ConformedDimensions": {
      "Code":itm.UserID
    },
    "Properties": {
      "Department":itm.Department,
      "FirsName": itm.User.split(',')[1].trim(),
      "LastName":itm.User.split(',')[0].trim()
    },
    "Connections":[
      {
        "NodeType": "Department",
        "RelType": "MEMBER",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Code": itm.Department
        },
        "Properties": {
          "Name":itm.Department
        }
      },
      {
        "NodeType": "Work",
        "RelType": "WORKED",
        "ForwardRel": true,
        "ConformedDimensions": {
          "DateWorked": itm.Date,
          "User": itm.UserID,
          "Task": itm.TaskID
        },
        "Properties": {
            "Notes": itm.Notes,
            "Hours": parseFloat(itm.Time)
        }
      },
     
    ]
  }
}