import { Router } from "express";
import { appHealth } from "../controllers/healthController.js";

const healthRouter = Router();

healthRouter.get("/health", appHealth);

export default healthRouter;
