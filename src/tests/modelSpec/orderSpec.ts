// import Ordermodel from "../../models/order.model"
// import  addProductToOrder  from "../../models/order.model";
// import  create  from "../../models/order.model";
// import  show   from "../../models/order.model";
import Ordermodel from "../../models/order.model";

const ordermodle = new Ordermodel();
let userID: number

describe("check if method are defined in Order Model", ()=>{

    describe("Create Order Model", ()=>{
        
        it('Should have Create method', ()=>{
            expect(ordermodle.create).toBeDefined();
        })
    });
        
    describe("AddProduct Order Model", ()=>{

        it('Should have AddProduct method', ()=>{
            expect(ordermodle.addProductToOrder).toBeDefined();
        })
    });

    describe("Show Order Model", ()=>{

        it('Should have Show method', ()=>{
            expect(ordermodle.show).toBeDefined();
        })
    });

    describe("Sending data to Order Model", ()=>{

        describe("Test Order Model methods", ()=>{
            
            it('Create order', async () => {
                 ordermodle.create( {
                    user_id: userID,
                    order_status: "active"
                })
                const orders = await ordermodle.index()
                expect(orders)
            });
            
            it('Fetch all orders', async () => {
                const orders = await ordermodle.index()
                expect(orders);
            });
            
            it('Fetch a order', async () => {
                const orders = await ordermodle.show(1)
                expect(orders)
            });


        });
    
    });
});