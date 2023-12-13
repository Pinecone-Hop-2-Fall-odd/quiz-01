import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        const body = req.body
        const token = body.token || req.query.token || req.headers["x-headers-token"];

        if (!token) {
            return res.status(403).json({ success: false, message: "insert token" })
        }
        try {
            const decoded = jwt.verify(token, "Ultraprivatekey");
            req.user = decoded
        } catch (err) {
            return res.status(401).json({ success: false, message: "inserted token wrong or none" })
        }
        return next()
    } catch (err) {
        return res.status(403).json({ success: false, message: "something wrong" })
    }
};
