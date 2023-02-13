import client from "../database";
import Order from "../types/orders.types";

class Ordermodel {

  async create(o: Order): Promise<Order[]> {
    try {
      const sql =
      `INSERT INTO orders (user_id, product_id, quantity, order_status) VALUES($1, $2, $3, $4) RETURNING *`;
      const conn = await client.connect();
      const result = await conn.query(sql, [o.user_id, o.product_id, o.quantity, o.order_status]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }
  
  async show(id: string): Promise<Order> {
    try {
      const sql = `SELECT name, price, quantity, order_status FROM products INNER JOIN orders ON products.id = orders.product_id Where user_id = ($1)`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);

      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find order ${id}, ${(error as Error).message}`);
    }
  }

}

export default Ordermodel;
