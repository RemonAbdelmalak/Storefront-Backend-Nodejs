import client from "../database";
import Order from "../types/orders.types";
import Order_Product from "../types/order_products.types";

class Ordermodel {

  async create(o: Order): Promise<Order[]> {
    try {
      const sql =
      `INSERT INTO orders (user_id, order_status) VALUES($1, $2) RETURNING *`;
      const conn = await client.connect();
      const result = await conn.query(sql, [o.user_id, o.order_status]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }

  async addProductToOrder(order_id: number, product_id: number, quantity: number): Promise<Order_Product[]> {
    try {
      const sql =
      `INSERT INTO order_product (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *`;
      const conn = await client.connect();
      const result = await conn.query(sql, [order_id, product_id, quantity]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new product in order. Error: ${err}`);
    }
  }
  
  async show(id: number): Promise<Order> {
    try {
      const sql = `SELECT * FROM orders WHERE user_id = ($1)`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);

      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find order ${id}, ${(error as Error).message}`);
    }
  }

  async index(): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * from orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving order ${(error as Error).message}`);
    }
  }

}

export default Ordermodel;
