import { app } from "./app";
import { baseURL } from "./baseURL";
import { getAllUsers } from "./endpoints/getAllUsers";


app.get(`${baseURL}/users`, getAllUsers)