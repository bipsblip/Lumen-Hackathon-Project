module.exports = {
    port: process.env.PORT || 3000, 
    jwtSecret: process.env.JWT_SECRET || 'jwt_secret'
};