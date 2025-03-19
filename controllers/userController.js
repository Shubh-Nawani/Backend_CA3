const User = require('../users')

const getUser = (req, res) => {
    try {
        const {username} = req.params

        const findIndex = User.findIndex(user => user.username==username)

        if (findIndex === -1) {
            return res.status(400).json({message: "User Not Found!"})
        }

        const userDetails = User[findIndex]

        return res.status(200).json({message: "User found...", data: userDetails})


      
 
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

module.exports = {getUser}



