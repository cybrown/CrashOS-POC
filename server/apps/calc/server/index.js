module.exports = function (expressApp) {

    expressApp.get('/', function (req, res) {
        res.send('message from calc');
    });

};
