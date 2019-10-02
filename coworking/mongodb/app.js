var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
   
    if(err) throw err;

    const db = client.db('mytestingdb');
    db.collection('Persons', function (err, collection) {
        collection.insertOne({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insertOne({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insertOne({ id: 3, firstName: 'James', lastName: 'Bond' });

        db.collection('Persons').estimatedDocumentCount(function (err, count) {
            if (err) throw err;
            console.log('Total Rows: ' + count);
        });
    });

    // Update/del
    db.collection('Persons', function (err, collection) {
        
        collection.updateOne({id: 1}, { $set: { firstName: 'James', lastName: 'Gosling'} }, {w:1}, function(err, result){
                    if(err) throw err;    
                    console.log('Document Updated Successfully');
                });
        collection.deleteOne({id:2}, {w:1}, function(err, result) {
            if(err) throw err;    
            console.log('Document Removed Successfully');
        });
    });

    // query
    db.collection('Persons', function (err, collection) {
        collection.find().toArray(function(err, items) {
           if(err) throw err;    
           console.log(items);            
       });
   });
})