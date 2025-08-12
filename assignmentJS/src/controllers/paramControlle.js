export const paramController = (req, res) => {
    return res.status(200).json({message: 'correct request id', id: req.id}); 
}; 