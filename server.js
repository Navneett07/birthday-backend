const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("🎂 Birthday Backend is Running ❤️");
});

// 🔐 PASSWORD CHECK ROUTE
app.post("/api/auth", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password required" });
  }

  if (password === process.env.SITE_PASSWORD) {
    return res.json({ success: true, message: "Access granted ❤️" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Wrong password ❌" });
  }
});

// SERVER START (ONLY ONCE)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
