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

    

    describe("Sending data to Products Model", ()=>{

        describe("Test Products Model methods", ()=>{
            
            it('Fetch all Product', async function (){
                const product = {
                    name: "testname",
                    price: 9.99
                }
                await productmodel.create(product)
                const products = await productmodel.index()
    
                expect(products.length).toBeGreaterThan(0);
            });
            
            it('Fetch a Product', async function (){
                const products = await productmodel.show('9807f07d-f111-4d82-b7a9-18a41d145198')
                expect(products);
            });
            
            it('Create a Product', async function (){
                const product = {
                    name: "testname",
                    price: 9.99
                }
                await productmodel.create(product)
                const products = await productmodel.index()
    
                expect(products.length).toBeGreaterThan(0);
            });
        });
    
    });
});