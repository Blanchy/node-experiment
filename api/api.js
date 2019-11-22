const path = require("path");

// const toIndexFile = (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// }
let parentFolder='';
module.exports = {
    initApis: function (app, pFolder) {
        parentFolder = pFolder;
        app.get('/api/customerList',getCustomerList)
        console.log('api initApis')
    }    
}

const getCustomerList = (req, res) => {
    res.sendFile(path.join(parentFolder + '/data/customerList.json'));    
}