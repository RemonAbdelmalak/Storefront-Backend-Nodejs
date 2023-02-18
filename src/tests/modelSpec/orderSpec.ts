// import Ordermodel from "../../models/order.model"
import  addProductToOrder  from "../../models/order.model";
import  create  from "../../models/order.model";
import  show   from "../../models/order.model";
import  Ordermodel   from "../../models/order.model";

const ordermodle = new Ordermodel();

describe("check if method are defined in Order Model", ()=>{

    describe("Create Order Model", ()=>{
        
        it('Should have Create method', ()=>{
            expect(create).toBeDefined();
        })
    });
        
    describe("AddProduct Order Model", ()=>{

        it('Should have AddProduct method', ()=>{
            expect(addProductToOrder).toBeDefined();
        })
    });

    describe("Show Order Model", ()=>{

        it('Should have Show method', ()=>{
            expect(show).toBeDefined();
        })
    });

    describe("Sending data to Order Model", ()=>{

        describe("Test Order Model methods", ()=>{
            
            it('Fetch all orders', async function (){
                const order = {
                    user_id: "7fc763a5-eeaa-4585-820a-5f3c6f4056ce",
                    order_status: "active"
                }
                await ordermodle.create(order)
                const products = await ordermodle.index()
    
                expect(products.length).toBeGreaterThan(0);
            });
            
            it('Fetch a order', async function (){
                const products = await ordermodle.show('9807f07d-f111-4d82-b7a9-18a41d145198')
                expect(products);
            });

            it('Create order', async function (){
                const order = {
                    user_id: "7fc763a5-eeaa-4585-820a-5f3c6f4056ce",
                    order_status: "active"
                }
                await ordermodle.create(order)
                const products = await ordermodle.index()
    
                expect(products.length).toBeGreaterThan(0);
            });

            it('Create a Product in order', async function (){
                await ordermodle.addProductToOrder("67fb0f9e-6f6f-4b71-85f7-2763f945c4e6","478ce3bd-c207-47f6-aeab-986df2ea1486",20)
                const products = await ordermodle.index()
    
                expect(products.length).toBeGreaterThan(0);
            });
        });
    
    });
});