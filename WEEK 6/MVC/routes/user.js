const express = require("express");
const router = express.Router()
const {HandleGetAllUsers,HandleGetUserById, HandleUpdateUserById,HandleDeleteUserById,HandleCreateNewUser} = require("../controllers/user")

router.route("/")
.get(HandleGetAllUsers)
.post(HandleCreateNewUser)

router.route("/:id").get(HandleGetUserById).patch(HandleUpdateUserById).delete(HandleDeleteUserById)


module.exports = router;