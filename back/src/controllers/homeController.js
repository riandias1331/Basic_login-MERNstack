const User = require('../models/User.js')

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: message.error })
    }
}   

exports.createUsers = async(req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: message.error })
    }
}
exports.updateUsers = async(req, res) => {
    try {
        const userId = req.params.id
        const updateUser = req.body
        const user = await User.findByIdAndUpdate(userId, updateUser, { new: true })
        res.status(400).json({ message: "Usuário não encontrado"})
    } catch (error) {
        res.status(400).json({ message: message.error })
    }
}
exports.deleteUsers = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)

        if(!user){
            res.status(400).json({ message: "Usuário não encontrado"})
        }
        res.status(200).json({ message: "Usuário deletado"})
    } catch (error) {
        
    }
}