module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.IncidentNumber,
    "NodeType":"Incident",
    "SourceSystem": "CSVHarvester_Fis_Release_Report",
    "Priority": 1,
    "ConformedDimensions": {
      "IncidentNumber":itm.IncidentNumber
    },
    "Properties": {
      "IncidentDate":itm.IncidentDate,
      "Location":itm.Location,
      "EDCT":itm.EDCT,
      "LicenceNumber":itm.LicenceNumber,
      "LicenceType": itm.LicenceType,
      "IncidentDate": itm.IncidentDate,
      "IncidentNotificationDate":itm.IncidentNotificationDate,
      "IncidentCompleteDate": itm.IncidentCompleteDate,
      "Jurisdiction": itm.Jurisdiction,
      "ReleaseOffsite": itm.ReleaseOffsite,
      "SensitiveArea": itm.SensitiveArea,
      "PublicAffected": itm.PublicAffected,
      "EnvironmentAffected": itm.EnvironmentAffected,
      "ReleaseCleanupDate": itm.ReleaseCleanupDate,
      "PipelineLicenceSegmentID": itm.PipelineLicenceSegmentID,
      "PipelineLicenceLineNo": itm.PipelineLicenceLineNo,
      "PipeDamageType": itm.PipeDamageType,
      "VolumeReleased": itm.VolumeReleased,
      "VolumeRecovered": itm.VolumeRecovered,
      "VolumeUnit": itm.VolumeUnit
    },
    "Connections":[
      {
        "NodeType": "CauseCategory",
        "RelType": "CATEGORY",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.CauseCategory
        },
        "Properties": {

        }
      },
      {
        "NodeType": "Source",
        "RelType": "FROM",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.Source
        },
        "Properties": {

        }
      },
      {
        "NodeType": "CauseType",
        "RelType": "CAUSED_BY",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.CauseType
        },
        "Properties": {

        }
      },
      {
        "NodeType": "Company",
        "RelType": "HAD_INCIDENT",
        "ForwardRel": false,
        "ConformedDimensions": {
          "Name": itm.LicenseeName
        },
        "Properties": {
          "LicenseeID": itm.LicenseeID
          
        }
      },
      {
        "NodeType": "SubstanceReleased",
        "RelType": "RELEASED",
        "ForwardRel": true,
        "ConformedDimensions": {
          "SubstanceReleased": itm.SubstanceReleased
        },
        "Properties": {
          "Name": itm.SubstanceReleased
        }
      },
    ]
  }
}



										