import express from "express";

import { login, logout, signup, refreshToken, getProfile } from "../controllers/auth.controller.js";
//import { verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js";
//import { verifyToken } from "../middleware/verifyToken.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.post("/verify-email", verifyEmail);
// router.post("/forgot-password", forgotPassword);

// router.post("/reset-password/:token", resetPassword);

router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);


export default router;
