import express from "express";

import { login, logout, signup, refreshToken, getProfile, forgotPassword, resetPassword} from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


router.post("/forgot-password", forgotPassword);
router.post("/reset-password", protectRoute, resetPassword);


router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);


export default router;
