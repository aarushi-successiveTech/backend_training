import app from "./app"; 
const PORT : number = 8000; 


app.listen(PORT, ()=>{
    console.log(`port running at ${PORT}`);
})