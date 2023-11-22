import express from "express";
import cors from 'cors'
import { userRouter } from "./route/user-route.js";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());


app.use(userRouter);

// app.get("/user", (req, res) => {
//   const body = req.body;
//   fs.readFile("./data/user.json", (readError, data) => {
//       let savedData = JSON.parse(data);
//       if (readError) {
//           res.json({
//               status: "error",
//           })
//       } res.json({
//           status: "success",
//           data: savedData
//       })
//   })
// });

// app.post("/user", (req, res) => {
//   const body = req.body;
//   fs.readFile("./data/user.json", (readError, data) => {
//       if (readError) {
//           res.json({
//               status: "read file error",
//           })
//       }
//       let savedData = JSON.parse(data);
//       const newUser = {
//           id: Date.now().toString(),
//           username: body.username,
//           password: body.password,
//           email: body.email
//       };

//       savedData.push(newUser);

//       fs.writeFile(
//           "./data/user.json",
//           JSON.stringify(savedData),
//           (writeError) => {
//               if (writeError) {
//                   res.json({
//                       status: "error",
//                   })
//               } else {
//                   res.json({
//                       status: "task successfully done",
//                       data: savedData,
//                   })
//               }
//           }
//       )
//   })
// })


// app.delete("/user", (req, res) => {
//   const body = req.body;

//   fs.readFile("./data/user.json", "utf8", (readError, data) => {
//       let SavedData = JSON.parse(data);
//       if (readError) {
//           res.json({
//               status: "read file error",
//           })
//       }

//       console.log('body', body);

//       const deletetData = SavedData.filter((d) => d.id !== body.userId);


//       fs.writeFile(
//           "./data/user.json",
//           JSON.stringify(deletetData),
//           (writeError) => {
//               if (writeError) {
//                   res.json({
//                       status: "error",
//                   })
//               } else {
//                   res.json({
//                       status: "task done successfully",
//                       data: deletetData
//                   })
//               }
//           }
//       )
//   })
// })

// app.put("/user", (req, res) => {
//   const body = req.body;
//   fs.readFile("./data/user.json", (readError, data) => {
//       let SavedData = JSON.parse(data);
//       if (readError) {
//           res.json({
//               status: "error",
//           })
//       }
//       const update = SavedData.map((upd) => {
//           if (body.id === upd.id) {
//               return {
//                   ...upd,
//                   ...body
//               }

//           } return upd;

//       });
//       fs.writeFile("./data/user.json",
//           JSON.stringify(update),
//           (writeError) => {
//               if (writeError) {
//                   res.json({
//                       status: "error"
//                   })
//               } else {
//                   res.json({
//                       status: "task done successfully",
//                       data: update
//                   })
//               }
//           }

//       )
//   })
// });



app.listen(8800, () => {
  console.log("server is running on http://localhost:8800");

})
