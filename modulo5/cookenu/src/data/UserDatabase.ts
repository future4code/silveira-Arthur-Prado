import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";
import { getPerfil } from "../endpoints/getPerfil";
import { userInfo } from "os";
import { getDiffieHellman } from "crypto";

export class UserDatabase extends BaseDatabase {
  public async saveUser(user: User) {
    try {
      await BaseDatabase.connection("Cookenu_Users").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("Cookenu_Users")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPerfil(): Promise<User[]> {
    try {
      const users = await BaseDatabase.connection("Cookenu_Users").select(
        "id",
        "name"
      )
      return users.map((user) => User.toUserModel(user))
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
