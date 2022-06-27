import connection from "../connection";

export const createUserData = async (id: string, email: string, password: string) => {
    await connection("User")
      .insert({
        id,
        email,
        password,
      })
      .into("User");
  };