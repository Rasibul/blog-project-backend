import { Router } from "express";
import { blogRoutes } from "../modules/blog/blog.routes";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: userRoutes,
    },
    {
        path: '/blogs',
        route: blogRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
