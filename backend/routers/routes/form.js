const express = require("express");
const auth = require("./../middlewares/authentication");
const formRouter = express.Router();

const {
    form,getAllForm,changeStatus,
} = require("./../controllers/form");

formRouter.post("/form", auth, form);
formRouter.get("/form", getAllForm);
formRouter.put("/form/:id", changeStatus);



module.exports = formRouter;
