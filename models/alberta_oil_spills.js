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
      "IncidentMeridian": itm.IncidentMeridian
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
    ]
  }
}

LicenceNumber
LicenceType
IncidentNotificationDate
IncidentCompleteDate
Source
StrikeArea
FieldCentre
LicenseeID
LicenseeName
Jurisdiction
ReleaseOffsite
SensitiveArea
PublicAffected
EnvironmentAffected
WildlifeLivestockAffected
AreaAffected
PublicEvacuatedCount
ReleaseCleanupDate
PipelineLicenceSegmentID
PipelineLicenceLineNo
PipeDamageType
PipeTestFailure
PipelineOutsideDiameter(mm)
PipeGrade
PipeWallThickness(mm)
SubstanceReleased
VolumeReleased
VolumeRecovered
VolumeUnits
SubstanceReleased2
VolumeReleased2
VolumeRecovered2
VolumeUnits2
SubstanceReleased3
VolumeReleased3
VolumeRecovered3
VolumeUnits3
SubstanceReleased4
VolumeReleased4
VolumeRecovered4
VolumeUnits4
Location1

										