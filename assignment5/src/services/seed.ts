const country = require('../utils/countrySchema');
import { string } from 'joi';
import mongoose from 'mongoose'; 


mongoose.connect("mongodb://localhost:27017/successiveData");

const countries = ['India', 'Brazil', 'Australia', 'US'];

class Seeding{

    async seedData(){
        const countryDocs = countries.map(name => ({countryName : string})); 
        await country.insertMany(countryDocs);
    }
    catch(err: Error){
        console.log('seeding error', err);
    }
}

const seed = new Seeding(); 
seed.seedData().then(() => console.log('Seeding Done'));

