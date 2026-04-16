const jwt = require('jsonwebtoken');

const auth = {
    isAuthenticated: async (req, res, next) => {
        try {
            const token = req.cookies?.token;
            console.log(req.cookies);

            if (!token) {
                return res.status(401).json({
                    message: 'No token provided'
                });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!decoded) {
                return res.status(401).json({
                    message: 'Invalid token'
                });
            }

            req.user = {
                _id: decoded.id
            };

            next();

        } catch (error) {
            return res.status(401).json({
                message: "Token failed",
                error: error.message
            });
        }
    }
};

module.exports = auth;