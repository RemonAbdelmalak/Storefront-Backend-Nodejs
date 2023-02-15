import Productmodel from "../../models/products.model";

const productmodel = new Productmodel();

describe("Product Model", ()=>{

    describe("Create Product Model", ()=>{
        
        it('Should have Create method', ()=>{
            expect(productmodel.create).toBeDefined();
        })
    });
        
    describe("index Product Model", ()=>{

        it('Should have index method', ()=>{
            expect(productmodel.index).toBeDefined();
        })
    });

    describe("Show Product Model", ()=>{

        it('Should have Show method', ()=>{
            expect(productmodel.show).toBeDefined();
        })
    });

});