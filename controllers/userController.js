import bcrypt from 'bcryptjs'
import User from "../models/user.js"

export async function postUser(req, res){
    const body = req.body
    try {
        const user = new User(body)
        user.password = await bcrypt.hash(body.password, 10)
        await user.save()
        res.status(200).json({ msg: 'User created succesfully'})
    } catch (error){
        res.status(500).json({ msg: error })
    }
}

export async function Login (req, res) {
    const {email, password} = req.body
    try {
        const user = await User.findOne({ email: email })
        if(!user){
            res.status(401).json({ msg: 'Email or password dont found '})
        }
        else {
            const userLogged = await bcrypt.compare(password, user.password)
            if(userLogged){
                res.status(200).json({ msg: 'Logged' })
            }
            else {
                res.status(404).json({ msg: 'Email or password dont found'})
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error }) 
    }
}