const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { readDb } = require("../data/db");

function login(req, res) {
  const { email, password } = req.body;
  const { users } = readDb();

  const user = users.find((item) => item.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const passwordMatches = bcrypt.compareSync(password, user.password);
  if (!passwordMatches) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET || "supersecretkey",
    { expiresIn: "8h" }
  );

  return res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
}

module.exports = { login };
