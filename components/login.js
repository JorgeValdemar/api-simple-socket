module.exports = function(req, res) {
    var alerts = require('../helper/alerts');
    var sql = require('../helper/runSql');

    sql.query('select top (2) * from login', function (recordset) {
        alerts.alerta();
        res.send(recordset);
    });  
};