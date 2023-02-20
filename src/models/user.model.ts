import client from "../database";
import User from "../types/users.types";
import bcrypt from "bcrypt";

class Usermodel {
  
  async create(u: User): Promise<User[]> {
    try {
      const sql =
      "INSERT INTO users (first_name,last_name, password) VALUES($1, $2, $3) RETURNING *";
      const conn = await client.connect();
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash("password", salt);
      const result = await conn.query(sql, [u.first_name,u.last_name, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new user. Error: ${err}`);
    }
  }

  async show(id: number): Promise<User> {
    try {
      const sql = `SELECT * FROM users WHERE id=($1)`;

      const connection = await client.connect();

      const result = await connection.query(sql, [id]);

      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find user ${id}, ${(error as Error).message}`);
    }
  }

  async index(): Promise<User[]> {
    try {
      const connection = await client.connect();
      const sql = "SELECT * from users";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving users ${(error as Error).message}`);
    }
  }
  
}

export default Usermodel;
