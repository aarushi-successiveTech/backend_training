import mongoose from 'mongoose';

const createModel = new mongoose.Schema({
    name : {type : String, required: true}, 
    email : {type : String, required : true},
    password : {type : String, required : true}, 
    role : {enum : ['admin', 'user'], required : true}
});

const User = mongoose.model('user', createModel, 'users');
export default User; 