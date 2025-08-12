import { connectDB } from '../config/db.js';
import Seeds from '../model/seedModel.js';

const generatingData = (count) => {
    const items =[]; 

    for (let i =0; i < count; i++){
        items.push({
            name : `seed${i}`, 
            email : `seed${i}@gmail.com`, 
            age : i 
        }); 
    }

    return items; 
}; 

const seeding = async() => {
    try{

        await connectDB(); 
        await Seeds.deleteMany(); 

        const data = generatingData(50); 
        await Seeds.insertMany(data); 

        console.log('seeded data added');
        process.exit(0); 
    }
    catch(error){
        console.log('error adding the data');
        process.exit(1);
    }
}; 

seeding(); 