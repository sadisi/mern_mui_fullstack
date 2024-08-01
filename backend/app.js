const expres = require("express");
const app = expres();
const signupRouter = require("./src/Routes/Signup");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8078;

app.use(bodyParser.json());
app.use(cors());

app.use("/user", signupRouter );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

