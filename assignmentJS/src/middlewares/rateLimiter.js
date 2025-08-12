let count = 0 ; 
let startTime = Date.now(); 

export const rateLimiter = (limit, windowTime) => {
    return (req, res, next) => {
        const now = Date.now(); 

        if(now = startTime > windowTime){
            count = 0 ; 
            startTime = now;
        
        }

        if(count < limit){
            count++;
            next(); 
        }
        else{
            console.log('bad request');
            return res.status(429).json({message: 'too many request'});
        }
    };
}; 