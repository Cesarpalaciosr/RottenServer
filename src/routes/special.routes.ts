import { Router } from "express";
import passport from "passport";

import {deleteUser, editpassword, edituser, FindUser} from "../controllers/user.controller";
import {AddOrRemoveLike, CheckLike, GetLikes} from "../controllers/rate.controller";
import {DeleteComment, getComments, GetCommentsNumber, NewComment} from "../controllers/comment.controller";


const router = Router();

router.get("/special", passport.authenticate("jwt", { session: false }), (req, res) => {res.send("succes");});

//endpoints para users
router.post("/finduser", passport.authenticate("jwt", { session: false }), FindUser);
router.post("/deleteuser", passport.authenticate("jwt", { session: false }), deleteUser);
router.post("/edituser", passport.authenticate("jwt", { session: false }), edituser);
router.post("/editpass", passport.authenticate("jwt", { session: false }), editpassword);

//endpoints para comentarios
router.post("/newComment", passport.authenticate("jwt", { session: false }), NewComment);
router.post("/getcomments", passport.authenticate("jwt", { session: false }), getComments);
router.post("/getnumbercomments", passport.authenticate("jwt", { session: false }), GetCommentsNumber);
router.post("/deletecomment", passport.authenticate("jwt", { session: false }), DeleteComment);

export default router;