const path = require("path");

const toIndexFile = (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}

module.exports = {
    initApis: function (app) {
        console.log('api initApis')
    }    
}
