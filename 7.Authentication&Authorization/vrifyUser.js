import jsonwebtoken from "jsonwebtoken"

const verifyUser = async (req, res, next) => {
    const token = req.cookies?.auth
    console.log(req);
    

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "User not verified"
        })
    }

    try {
        const user = jsonwebtoken.verify(token, process.env.JSON_SECRET_KEY)
        req.user = user
        next
    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }

}


export default verifyUser