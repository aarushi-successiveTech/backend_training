export const customMiddleware = (req, res, next) => {
    const time = new Date().toLocaleDateString(); 

    console.log(`${req.method}, ${time}, ${req.originalUrl}`);
    next(); 
}; 