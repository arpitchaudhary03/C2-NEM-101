const { Router } = require("express");
const UserModel = require("../models/User");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const user = await new UserModel(req.body);

    user.save((err, data) => {
        if (err) {
            return res.status(500).send({ message: "Error occured" })
        }
        return res.status(201).send({ message: "Sign Up success", token: 1234 })
    });
});

userRouter.post("/login", async (req, res) => {

    const verifyUser = await UserModel.find(req.body)
    if (verifyUser.length >= 1) {
        let { name, _id } = verifyUser[0];
        let payload = {
            _id,
            name,
            token: 1234
        }
        return res.send(payload);
    }
    res.send({ message: "Wrong User Credentials" });
});

module.exports = userRouter;