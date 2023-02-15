import Ordermodel from "../../models/order.model"

const ordermodel = new Ordermodel();

describe("Order Model", ()=>{

    describe("Create Order Model", ()=>{
        
        it('Should have Create method', ()=>{
            expect(ordermodel.create).toBeDefined();
        })
    });
        
    describe("AddProduct Order Model", ()=>{

        it('Should have AddProduct method', ()=>{
            expect(ordermodel.addProductToOrder).toBeDefined();
        })
    });

    describe("Show Order Model", ()=>{

        it('Should have Show method', ()=>{
            expect(ordermodel.show).toBeDefined();
        })
    });

});