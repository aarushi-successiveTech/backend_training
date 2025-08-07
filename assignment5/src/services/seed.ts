const country = require('../utils/countrySchema');
import { string } from 'joi';
import connectDB from '../config/db';

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

// ab db se connect hoga aur fir class ka instance bnake we will make the seeding data
(async ()=>{
    await connectDB(); 
    const seed = new Seeding();
    seed.seedData().then(() => console.log('seeding Done'));
})();