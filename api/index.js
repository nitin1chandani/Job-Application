const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/UserSchema");
const Employer = require("./models/EmployerSchema");
const app = express();

const salt = "$2b$10$1J9Z1Z6Z1Z6Z1Z6Z1Z6Z1u";
const secret = "njansfaknfsdfknian";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Add this line to enable credentials
  })
);
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.8egrqi9.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const userDoc = await User.create({
    fullName,
    email,
    password: bcrypt.hashSync(password, salt),
  });
  res.json(userDoc);
});

app.post("/recruit/register", async (req, res) => {
  const { fullName, companyName, email, password } = req.body;
  const employerDoc = await Employer.create({
    fullName,
    companyName,
    email,
    password: bcrypt.hashSync(password, salt),
  });
  res.json(employerDoc);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ email: user.email, userId: user._id }, secret, {
        expiresIn: "1h",
      });

      res.cookie("token", token, { httpOnly: true }); // Set the token as an HTTP-only cookie
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.post("/recruit/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const employer = await Employer.findOne({ email });

    if (!employer) {
      return res.status(401).json({ error: "Employer not found" });
    }

    const passwordMatch = await bcrypt.compare(password, employer.password);

    if (passwordMatch) {
      const token = jwt.sign(
        { email: employer.email, employerId: employer._id },
        secret,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, { httpOnly: true }); // Set the token as an HTTP-only cookie
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Failed to log in" });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
