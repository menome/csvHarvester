CSV-Extractor Bot

send it a path, library, and model and it will extract all data atoms out of the csv using the model
LibraryPath = 'local' means that the file is in the local directory and librarian is not needed



Model Example
##############
Model transform functions should return a JSON object with the following structure. 
{
      "Name": itm.name,
      "NodeType":"Person",
      "SourceSystem": "CSVHarvester",
      "Priority": 1,
      "ConformedDimensions": {
        "Code": itm.code
      },
      "Properties": {

      },
      "Connections":[
        {
          "NodeType": "Skill",
          "RelType": "IN_SECTION",
          "ForwardRel": true,
          "ConformedDimensions": {
            "sectionId": itm.skill
          },
          "Properties": {

          },
          "RelProps": {
              
          }          
        }
      ]
    }