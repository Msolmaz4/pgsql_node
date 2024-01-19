
const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const postgresClient = new pg.Pool({
    connectionString: process.env.DB_CONNECTION_STRING
});

module.exports = postgresClient;

//https://hasura.io/learn/database/postgresql/installation/2-postgresql-connection-string/
//burdan env baglanti icin postgresql://username:password@host:port/dbname[?paramspec] bunu kullandik
//DB_CONNECTION_STRING=postgresql://postgres:**********@localhost:5432/test localhostu unutma
//https://node-postgres.com/ buda node gore doc
