const path = require("path");

const toIndexFile = (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}

module.exports = {
    initRoutes: function (app) {
        app.get('/', toIndexFile);
        app.get('/about', toIndexFile);
        console.log('serverRoutes initRoutes')
    }    
}




