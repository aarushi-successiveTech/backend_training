export const paramMiddleware = (req, res, next) => {
    const id = req.params.id; 

    if(isNaN(Number(id))){
        return res.status(400).json({message:'invalid request'});
    }; 
    next(); 
}; 