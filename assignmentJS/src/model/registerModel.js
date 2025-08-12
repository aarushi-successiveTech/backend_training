import monogoose from 'mongoose'; 

const registerModel = new monogoose.Schema({
    name : {type: String, required: true}, 
    email : {type: String, required: true}, 
    password :{type: String, required: true}, 
    role : {type: String, enum: ['admin', 'user'],required: true}
}); 

const Registers = monogoose.model('register', registerModel, 'registers');
export default Registers; 