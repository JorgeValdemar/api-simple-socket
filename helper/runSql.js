function runSql() {
    const sql = require('mssql')
    const config = {
        user: 'Rakandl',
        password: 'nkmlbj59',
        server: 'mssql05.redehost.com.br', // You can use 'localhost\\instance' to connect to named instance 
        database: 'CardGame',
        port: 5003,
 
        options: {
            encrypt: false // Use this if you're on Windows Azure 
        }
    }

    this.query = function (queryString, callback) {
        // connect to your database
        sql.connect(config, function (err) {
            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();

            // query to the database and get the records
            request.query(queryString, function (err, recordset) {
                if (err) console.log(err);

                sql.close();

                // send records as a response
                callback(recordset);
            });
        });
    };

    this.init = function () {}
}

module.exports = new runSql();