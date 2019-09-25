const helpers = require('./helpers');
const csv=require('csvtojson');
const RabbitClient = require('@menome/botframework/rabbitmq');

module.exports = function(bot) {
    var outQueue = new RabbitClient(bot.config.get('rabbit_outgoing'));
    outQueue.connect();

    this.post = function(path, library, model, req, res) {
        // console.log("holy shit its going through: " + file)
        //first need to validate model to ensure it fits schema
        //req.bot.logger.info(model);

        //if library is 'local' don't use librarian pull off disk
        if(library = 'local'){
            let transform = require('../models/' + model)
            csv().fromFile("local/" + path)
            .then(async (jsonObj)=>{
                res.status(200).send("Extracting csv data.");
                for (i = 0; i < jsonObj.length; i++) {
                    let msg=transform.transform(jsonObj[i]);
                    console.log(JSON.stringify(msg));
                    while(!outQueue.publishMessage(msg, "harvesterMessage")) {
                        // Sorry
                        await new Promise(resolve=>{
                            setTimeout(resolve,1000)
                        })
                    }
                } 
            })
        }else{
            //then need to get file from librarian
            //req.bot.logger.info("library:%s\npath:%s",library,path)
            //get a download location
            // var tmpPath = "/tmp/"+path;
            //send the librairian a getFile request
            // return helpers.getFile(req.bot, library, path, tmpPath )
            // .then((tmpPath) => {
            //     //do shit with the file
            //     req.bot.logger.info("Got file:%s",tmpPath)
            //     helpers.deleteFile( tmpPath )
            //     return res.status(200).send("Extracting csv data.");
            // })
            // .catch((error)=>{
            //     helpers.deleteFile( tmpPath )
            //     return res.status(400).send("Error getting file from librarian\n%s",error);

            // })
        }

        
        //return res.status(200).send("bottoms out.");
    }
}

