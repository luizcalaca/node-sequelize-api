const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token não enviado' });

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        next();
    });
}

module.exports = authenticateToken;