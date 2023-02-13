import client from "../database";
import Product from "../types/products.types";

class Productmodel {
  
  async create(p: Product): Promise<Product[]> {
    try {
      const sql ="INSERT INTO products (name,price) VALUES($1, $2) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [p.name,p.price]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new product. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = `SELECT * FROM products WHERE id=($1)`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);

      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find product ${id}, ${(error as Error).message}`);
    }
  }

  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * from products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving users ${(error as Error).message}`);
    }
  }

}

export default Productmodel;
