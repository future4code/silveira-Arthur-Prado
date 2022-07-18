import { app } from "./app";
import { getPerfil } from "./endpoints/getPerfil";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.get("/user", getPerfil)
app.post("/user", signup)
app.post("/user/login", login)
