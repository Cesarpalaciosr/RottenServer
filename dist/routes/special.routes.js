"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const user_controller_1 = require("../controllers/user.controller");
const comment_controller_1 = require("../controllers/comment.controller");
const router = (0, express_1.Router)();
router.get("/special", passport_1.default.authenticate("jwt", { session: false }), (req, res) => { res.send("succes"); });
//endpoints para users
router.post("/finduser", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.FindUser);
router.post("/deleteuser", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.deleteUser);
router.post("/edituser", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.edituser);
router.post("/editpass", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.editpassword);
//endpoints para comentarios
router.post("/newComment", passport_1.default.authenticate("jwt", { session: false }), comment_controller_1.NewComment);
router.post("/getcomments", passport_1.default.authenticate("jwt", { session: false }), comment_controller_1.getComments);
router.post("/getnumbercomments", passport_1.default.authenticate("jwt", { session: false }), comment_controller_1.GetCommentsNumber);
router.post("/deletecomment", passport_1.default.authenticate("jwt", { session: false }), comment_controller_1.DeleteComment);
exports.default = router;
