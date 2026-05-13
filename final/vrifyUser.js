import jsonwebtoken from "jsonwebtoken"

const verifyUser = async (req, res, next) => {
    let token;
    console.log(req.cookies?.auth);
    if (req.cookies?.auth) token = req.cookies?.auth;
    else if (req.headers?.authorization?.startsWith("Bearer")) token=req.headers?.authorization.split(" ")[1]
    
    console.log(token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "User not verified"
        })
    }

    try {
        const user = jsonwebtoken.verify(token, process.env.JSON_SECRET_KEY)
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }

}


export default verifyUser