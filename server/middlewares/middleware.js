const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
   
    const headtoken = req.headers['authorization'];
  
    const arr = headtoken.split(' ')

    const token= arr[1]
  
    console.log('Received Token:', token);
  
    if (!token) return res.status(401).json({ error: 'Access denied' });
  
    try {
      const decoded = jwt.verify(token, 'this is my secret key for our first senior project');
      req.user = decoded;
      console.log("Decoded Token:", req.user);
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }

 const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).send('Access denied, Admins only');
    }
    next();
  }
  

module.exports = {
    verifyToken,
    isAdmin
} 
