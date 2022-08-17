const  jwt =require("jsonwebtoken");
const genrateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {
expiresin: "30d",
});
}
module.exports = genrateToken;
