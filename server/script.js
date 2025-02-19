import fs from 'fs/promises';
import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://localhost:27017');

fs.readFile('pets.json', 'utf-8').then((data) => {
    const pets = JSON.parse(data);
    client.connect().then(() => {
        client.db('zovpet').collection('pets').insertMany(pets).then(() => {
            console.log('Data inserted');
            client.close();
        });
    });
});
