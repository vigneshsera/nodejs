var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
try {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        // dbo.createCollection("customers", function(err, res) {
        //     if (err) throw err;
        //     console.log("Collection created!");
        //     db.close();
        // });
        // var myobj = { name: "Company Inc", address: "Highway 37" };

        // dbo.collection("customers").insertOne(myobj, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document inserted");
        //     db.close();
        // });
        // var myobj = [
        //     { name: 'John', address: 'Highway 71' },
        //     { name: 'Peter', address: 'Lowstreet 4' },
        //     { name: 'Amy', address: 'Apple st 652' },
        //     { name: 'Hannah', address: 'Mountain 21' },
        //     { name: 'Michael', address: 'Valley 345' },
        //     { name: 'Sandy', address: 'Ocean blvd 2' },
        //     { name: 'Betty', address: 'Green Grass 1' },
        //     { name: 'Richard', address: 'Sky st 331' },
        //     { name: 'Susan', address: 'One way 98' },
        //     { name: 'Vicky', address: 'Yellow Garden 2' },
        //     { name: 'Ben', address: 'Park Lane 38' },
        //     { name: 'William', address: 'Central st 954' },
        //     { name: 'Chuck', address: 'Main Road 989' },
        //     { name: 'Viola', address: 'Sideway 1633' }
        // ];
        // dbo.collection("customers").insertMany(myobj, function(err, res) {
        //     if (err) throw err;
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     db.close();
        // });

        // var myobj = [
        //     { _id: 154, name: 'Chocolate Heaven' },
        //     { _id: 155, name: 'Tasty Lemon' },
        //     { _id: 156, name: 'Vanilla Dream' }
        // ];
        // dbo.collection("products").insertMany(myobj, function(err, res) {
        //     if (err) throw err;
        //     console.log(res);
        //     db.close();
        // });

        // var dbo = db.db("mydb");
        // dbo.collection("customers").findOne({}, function(err, result) {
        //     if (err) throw err;
        //     console.log(result.name);
        //     db.close();
        // });

        // dbo.collection("customers").find({}).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // var query = { address: "Park Lane 38" };
        // dbo.collection("customers").find(query).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });


        // var query = { address: /^S/ };
        // dbo.collection("customers").find(query).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // var mysort = { name: 1 };
        // dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // var mysort = { name: -1 };
        // dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        // var myquery = { address: 'Mountain 21' };
        // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        //     if (err) throw err;
        //     console.log("1 document deleted");
        //     db.close();
        // });

        // var myquery = { address: /^A/ };
        // dbo.collection("customers").deleteMany(myquery, function(err, obj) {
        //     if (err) throw err;
        //     console.log(obj.deletedCount + " document(s) deleted");
        //     db.close();
        // });

        // dbo.collection("customers").drop(function(err, delOK) {
        //     if (err) throw err;
        //     if (delOK) console.log("Collection deleted");
        //     db.close();
        // });

        // dbo.dropCollection("products", function(err, delOK) {
        //     if (err) throw err;
        //     if (delOK) console.log("Collection deleted");
        //     db.close();
        // });

        // var myquery = { address: "Valley 345" };
        // var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
        // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log(res);
        //     console.log("1 document updated");
        //     db.close();
        // });

        // var myquery = { address: "Valley 345" };
        // var newvalues = { $set: { address: "Canyon 123" } };
        // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {

        //     if (err) throw err;
        //     console.log(res);
        //     console.log("1 document updated");
        //     db.close();
        // });

        // var myquery = { address: /^S/ };
        // var newvalues = { $set: { name: "Minnie" } };
        // dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log(res.modifiedCount + " document(s) updated");
        //     db.close();
        // });

        // dbo.collection("customers").find().limit(5).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });

        dbo.collection('orders').aggregate([{
            $lookup: {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }]).toArray(function(err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });
    });
} catch (e) {
    console.error(e);
}