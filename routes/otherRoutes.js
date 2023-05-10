import express from 'express';
import {authorizedAdmin, isAuthenticated} from "../middlewares/auth.js"
import { contact, courseRequest, getDashboardStats } from '../controllers/otherController.js';


const router = express.Router();

// Contact form
router.route("/contact").post(contact)
// Request form
router.route("/courserequest").post(courseRequest)
// Get admin dashboard stats
router.route("/admin/stats").get(isAuthenticated, authorizedAdmin, getDashboardStats)

export default router;