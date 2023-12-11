import jwt  from "jsonwebtoken";


 export const verifyToken = async (res, req ,next) => {
    const token = req.body.token || req.query.token || req.headersp["x-headers-token"];

    if(!token) {
        res.status(403).json({success: false, message: "insert token"})
    } 
    try{
        const decoded = jwt.verify(token, "Ultraprivatekey");
        req.user = decoded
    } catch(err) {
        res.status(401).json({success: false, message: "inserted token wrong or none"})
    }
    return next()
};
