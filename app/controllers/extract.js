module.exports.swaggerDef = {
    "/extract": {
      "x-swagger-router-controller": "extract",
      "post": {
        "tags": [
          "csvHarvester"
        ],
        "parameters": [
          {
            "name": "path",
            "in": "header",
            "required": true,
            "description": "The path of the file we're extracting. Remember to escape any special characters.",
            "type": "string"
          },
          {
            "name": "library",
            "in": "header",
            "description": "The string identifying the Library we're pulling from.",
            "required": true,
            "type": "string"
          },
          {
            "name": "model",
            "in": "header",
            "description": "model identifier for extracted data",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success"
          },
          "default": {
            "description": "Error"
          }
        }
      }
    }
  }
  





module.exports.post = function(req,res) {

    var path = req.swagger.params.path.value;
    if(!path) return res.status(400).send("Specify a file to model.");

    var library = req.swagger.params.library.value;
    if(!library) return res.status(400).send("Specify the files current library.");

    var model = req.swagger.params.model.value;
    if(!model) return res.status(400).send("Specify a file to model.");

    //req.bot.logger.info("modeling file %s", req.swagger.params.path.value)
    return req.mp.post(path, library, model, req, res);
  }