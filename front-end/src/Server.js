const express=require('express')
const jwt = require('jsonwebtoken');
const app=express();
app.get("/hello", (req,res)=>{
res.send("hello ng");
})
// Secret key used for signing and verifying JWTs
const secretKey = 'your-secret-key'; // Replace this with a strong secret key in production

// Sample user data (this can be fetched from a database in a real application)
const sampleUser = {
  id: '123456789',
  username: 'john_gidena',
  role: 'user',
};

// Function to generate a JWT
function generateJWT(user) {
  // JWT payload containing user information
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
  };

  // JWT options: expiresIn specifies the token's expiration time (e.g., 1 hour)
  const options = {
    expiresIn: '1h',
  };

  // Generate and return the JWT
  const token = jwt.sign(payload, secretKey, options);
  return token;
}


// Function to verify a JWT
function verifyJWT(token) {
  try {
    // Verify the JWT using the secret key
    const decoded = jwt.verify(token, secretKey+"");
    return decoded;
  } catch (err) {
    // If the token is invalid or expired, an error will be thrown
    console.error('JWT verification failed:', err.message);
    return null;
  }
}

// Example usage:
const userToken = generateJWT(sampleUser);
console.log('Generated JWT:', userToken);

const decodedToken = verifyJWT(userToken);
if (decodedToken) {
  console.log('Decoded JWT payload:', decodedToken);
}
app.get("/protected", (req,res)=>{

})
app.listen(9089)

console.log("Server is running");