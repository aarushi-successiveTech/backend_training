import mongoose from "mongoose";

const seedModel = new mongoose.Schema({
    name : {type: String, required: true}, 
    email : {type: String, required: true}, 
    age : {type: Number, required: true}
}); 

const Seeds = mongoose.model('seed', seedModel, 'seeds');
export default Seeds; 