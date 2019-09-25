module.exports = {
    transform
  } 
  											
function transform(itm){
  return {
    "Name": itm.SurfLoc,
    "NodeType":"Well",
    "SourceSystem": "CSVHarvester_alberta_wells_wgs84",
    "Priority": 1,
    "ConformedDimensions": {
      "Licence":itm.Licence
    },
    "Properties": {
      "CompName":itm.CompName,
      "Latitude":itm.Latitude,
      "Longitude":itm.Longitude,
      "KBE":itm.KBE,
      "EDCT":itm.EDCT,
      "LicStatus":itm.LicStatus,
      "LicStatDat":itm.LicStatDat,
      "OpSurvProv":itm.OpSurvProv,
      "CompName":itm.CompName
    },
    "Connections":[
      {
        "NodeType": "Company",
        "RelType": "COMPANY_FOR_WELL",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.CompName
        },
        "Properties": {

        }
      },
      {
        "NodeType": "Status",
        "RelType": "STATUS_FOR_WELL",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.LicStatus
        },
        "Properties": {
  
        }
      },
      
    ]
  }
}