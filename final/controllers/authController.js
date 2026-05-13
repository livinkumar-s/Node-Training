import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
// Sign up 
export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(401).json({
            success: false,
            message: "Missing required fields!"
        })
    }

    try {

        const currentUser = await userModel.findOne({ email: email })
        if (currentUser?.name) {
            return res.status(401).json({
                success: false,
                message: "User already exist"
            })
        }


        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND))

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: "User is created..!"
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

// login
export const logIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: "Missing required fields!"
        })
    }

    try {

        const currentuser = await userModel.findOne({ email: email })
        if (!currentuser?.name) {
            return res.status(401).json({
                success: false,
                message: "User does not exist"
            })
        }

        const isPassOk = await bcrypt.compare(password, currentuser?.password)
        console.log(isPassOk);


        if (!isPassOk) {
            return res.status(401).json({
                success: false,
                message: "Invalid credintials"
            })
        }

        const token = jsonwebtoken.sign({ id: currentuser._id, email: currentuser.email }, process.env.JSON_SECRET_KEY, {
            expiresIn: "1h"
        })


        res.cookie("auth", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none", //CSRF
            maxAge: 60 * 60 * 1000
        }).status(201).json({
            success: true,
            message: "User is created..!",
            data: {
                user: {
                    username: currentuser?.name,
                    email: currentuser?.email
                }
            }
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

// logout 
export const logOut = async (req, res) => {

    console.log(req.user?.email);
    
    try {

        if (req.user?.email) {
            res.clearCookie("auth", {
                httpOnly: true,
                secure: true,
                sameSite: "none", //CSRF
            }).json({
                message:"Successfully logged out...!"
            })
        }


    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}
