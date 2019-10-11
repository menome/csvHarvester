module.exports = {
    transform
  } 

function transform(itm){
  return {
    "Name": itm.SurfLoc,
    "NodeType":"Spill",
    "SourceSystem": "CSVHarvester_Alberta_Oil_Spills_1975-2013.csv",
    "Priority": 1,
    "ConformedDimensions": {
      "IncidentNumber":itm.IncidentNumber
    },
    "Properties": {
      "IncidentDate":itm.IncidentDate,
      "Latitude":itm.Latitude,
      "Longitude":itm.Longitude,
      "Location":itm.Location,
      "EDCT":itm.EDCT,
      "InjuryCount": itm.InjuryCount,
      "FatalityCount": itm.FatalityCount,
      "IncidentLSD": itm.IncidentLSD,
      "IncidentSection": itm.IncidentSection,
      "IncidentTownship": itm.IncidentTownship,
      "IncidentRange" : itm.IncidentRange,
      "IncidentMeridian": itm.IncidentMeridian,
      "IncidentSection" : itm.IncidentSection,
      "IncidentTownship" : itm.IncidentTownship,
      "IncidentRange" : itm.IncidentRange,
      "IncidentMeridian": itm.IncidentMeridian,
      "IncidentNotificationDate": itm.IncidentNotificationDate,
      "IncidentCompleteDate": itm.IncidentCompleteDate,
      "Jurisdiction": itm.Jurisdiction,
      "ReleaseOffsite": itm.ReleaseOffsite,
      "SensitiveArea": itm.SensitiveArea,
      "PublicAffected": itm.PublicAffected,
      "EnvironmentAffected": itm.EnvironmentAffected,
      "WildlifeLivestockAffected": itm.WildlifeLivestockAffected,
      "AreaAffected": itm.AreaAffected,
      "PublicEvacuatedCount": parseFloat(itm.PublicEvacuatedCount),
      "ReleaseCleanupDate": itm.ReleaseCleanupDate,
      "PipelineLicenceSegmentID": parseFloat(itm.PipelineLicenceSegmentID),
      "PipelineLicenceLineNo": itm.PipelineLicenceLineNo,
      "PipeDamageType": itm.PipeDamageType,
      "PipeTestFailure": itm.PipeTestFailure,
      "PipelineOutsideDiameter(mm)": parseFloat(itm.PipelineOutsideDiameter),
      "PipeGrade": itm.PipeGrade,
      "PipeWallThickness(mm)": parseFloat(itm.PipeWallThickness),
      "VolumeReleased":  parseFloat(itm.VolumeReleased),
      "VolumeRecovered": parseFloat(itm.VolumeRecovered),
      "VolumeUnits": itm.VolumeUnits,
      "SubstanceReleased":parseFloat(itm.SubstanceReleased2),
      "VolumeReleased2": parseFloat(itm.VolumeReleased2),
      "VolumeRecovered2": parseFloat(itm.VolumeRecovered2),
      "VolumeUnits2": parseFloat(itm.VolumeUnits2),
      "SubstanceReleased3": parseFloat( itm.SubstanceReleased3),
      "VolumeReleased3": parseFloat(itm.VolumeReleased3),
      "VolumeRecovered3": parseFloat( itm.VolumeRecovered3),
      "VolumeUnits3": parseFloat(itm.VolumeUnits3),
      "SubstanceReleased4": parseFloat( itm.SubstanceReleased4),
      "VolumeReleased4": parseFloat(itm.VolumeReleased4),
      "VolumeRecovered4": parseFloat( itm.VolumeRecovered4),
      "VolumeUnits4": parseFloat(itm.VolumeUnits4),
      "Location1": parseFloat(itm.Location1),
    },
    "Connections":[
      {
        "NodeType": "CauseCategory",
        "RelType": "SPILL_CATEGORY",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.CauseCategory
        },
        "Properties": {

        }
      },
      {
        "NodeType": "CauseType",
        "RelType": "SPILL_CAUSE",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.CauseType
        },
        "Properties": {
  
        }
      },
      {
        "NodeType": "FailureType",
        "RelType": "FAILURE_TYPE_OF",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.FailureType
        },
        "Properties": {
  
        }
      },
      {
        "NodeType": "IncidentType",
        "RelType": "INCIDENT_TYPE_OF",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.IncidentType
        },
        "Properties": {
  
        }
      },
      {
        "NodeType": "IncidentType",
        "RelType": "INCIDENT_TYPE_OF",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.IncidentType
        },
        "Properties": {
  
        }
      },
      {
        "NodeType": "License",
        "RelType": "HAS_LICENSE",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.LicenceNumber
        },
        "Properties": {
          "LicenceType": itm.LicenceType
        }
      },
      {
        "NodeType": "Source",
        "RelType": "SPILL_SOURCE",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.Source
        },
        "Properties": {
   
        }
      },
      {
        "NodeType": "StrikeArea",
        "RelType": "SPILL_STIKE_AREA",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.StrikeArea
        },
        "Properties": {
   
        }
      },
      {
        "NodeType": "FieldCentre",
        "RelType": "SPILL_FIELD_CENTER",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.FieldCentre
        },
        "Properties": {
   
        }
      },
      {
        "NodeType": "Company",
        "RelType": "SPILLED",
        "ForwardRel": true,
        "ConformedDimensions": {
          "LicenseeId": itm.LicenseeID.padStart(2, '0')
        },
        "Properties": {
          "Name": itm.LicenseeName 
        }
      },
      {
        "NodeType": "SubstanceReleased",
        "RelType": "RELEASED",
        "ForwardRel": true,
        "ConformedDimensions": {
          "Name": itm.SubstanceReleased
        },
        "Properties": {
          "Name": itm.LicenseeName 
        }
      },
    
    ]
  }
}



										