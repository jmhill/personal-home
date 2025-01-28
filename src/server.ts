import { Hono } from "hono";
const app = new Hono();

app.get("/", (ctx) => ctx.text("Under construction, check back later!"));

export default app;
