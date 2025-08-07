import mongoose , {Document} from "mongoose";

export interface IOrders extends Document {
    orderId : string, 
    customerName : string, 
    orderDate : Date, 
    status : string, 
    items: string, 
    totalAmount :number
};

const itemSchema = new mongoose.Schema({
    productName :  {type: String, required: true}, 
    price : {type: Number, required: true}, 
    quantity : {type : Number, required : true}
}); 

const orderModel = new mongoose.Schema({
    orderId : {type: String, required: true}, 
    customerName : {type : String, required: true}, 
    orderDate : {type: Date, required: true}, 
    status : {type: String, required: true}, 
    items : {type : [itemSchema], required: true}, 
    totalAmount : {type : Number, required: true}
});

module.exports = mongoose.model<IOrders>('order', orderModel, 'orders');