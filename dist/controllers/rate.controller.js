"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckLike = exports.GetLikes = exports.AddOrRemoveLike = void 0;
const rate_1 = __importDefault(require("../models/rate"));
//Crear Tweet
const AddOrRemoveLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rate_1.default.find({
        idTweet: req.body.idTweet,
        idUser: req.body.idUser,
    });
    console.log(result.length);
    if (result.length == 0) {
        const newLike = new rate_1.default(req.body);
        yield newLike.save();
        return res.status(201).json({ msg: "Se dio like" });
    }
    yield rate_1.default.deleteOne({ idTweet: req.body.idTweet, idUser: req.body.idUser });
    return res.status(201).json({ msg: "Se quito like" });
});
exports.AddOrRemoveLike = AddOrRemoveLike;
const GetLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rate_1.default.find({ idTweet: req.body.idTweet });
    return res.status(201).json(result.length);
});
exports.GetLikes = GetLikes;
const CheckLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield rate_1.default.find({
        idTweet: req.body.idTweet,
        idUser: req.body.idUser,
    });
    console.log(check.length);
    if (check.length == 0) {
        return res.status(201).json({ status: "false" });
    }
    return res.status(201).json({ status: "true" });
});
exports.CheckLike = CheckLike;
