import { Router } from "express";
import { ActivyController } from "./controller/ActivyController";
import { AuthenticateController } from "./controller/AuthenticateController";
import { CourseUnitController } from "./controller/CourseUnitController";
import { UserController } from "./controller/UserController";
import authenticated from "./middlewares/authenticated";

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authController = new AuthenticateController();

const routes = Router();


routes.post('/auth', authController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activy', authenticated, activyController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);

routes.post('/user', userController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);

export default routes;
