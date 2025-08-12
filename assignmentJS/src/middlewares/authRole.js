export const authRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized: No user found' });
        }
        const userRole = req.user.role; 
        if(!userRole || !allowedRoles.includes(userRole)){
            return res.status(403).json({message: 'forbidden user'});
        }
        next(); 
    }
}