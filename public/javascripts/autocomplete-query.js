const { MongoClient } = require("mongodb");
require("dotenv").config()
// connect to your Atlas cluster
const uri = process.env.URL_DB723;

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        // set namespace
        const database = client.db("db723");
        const coll = database.collection("clientes");

        // define pipeline
        const agg = [
            {$search: {index: "idx_Clientees", text: {query: "Emmanuel", path: {wildcard:"*"} }}},
            {$limit: 20},
            {$project: {_id: 0,personales:1,domicilio:1}}
        ];
        // run pipeline
        const result = await coll.aggregate(agg);

        // print results
        await result.forEach((doc) => console.log(doc));
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
