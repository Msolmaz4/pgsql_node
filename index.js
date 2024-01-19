const express = require("express");
const postgresClient = require("./db");
const app = express();
app.use(express.json());


const userRouter = require("./routes/userRouter")




app.use("/users",userRouter)
const port = 5000;

app.listen(port, () => {
    console.log(`Port ${port} is listening...`);

    postgresClient.connect((err) => {
        if (err) {
            console.log("Connect error", err.stack);
        } else {
            console.log("DB connected");
        }
    });
});
//mesela import ... from  expes diyelim bunu icin  "scripts": {
//     "start": "nodemon index.js",
//     "dev": "nodemon index.js"
//   },
//   "type":"module" ,zayilir
