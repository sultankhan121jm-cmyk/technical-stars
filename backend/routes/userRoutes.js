import express from 'express';
import {
    registerUser,
    loginUser,
    getProfile,
    getUsers,
    updateProfile,
    logoutUser,
} from '../controllers/userController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

// Admin routes
router.get('/', protect, authorize('admin'), getUsers);

export default router;