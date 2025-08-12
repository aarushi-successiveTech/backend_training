export const formController = (req, res) => {
    res.status(200).json({message: 'correct user data', data: req.body});
}