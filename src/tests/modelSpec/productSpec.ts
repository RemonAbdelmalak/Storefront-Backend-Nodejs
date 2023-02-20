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
            
            it('Create Product', async () => {
                await productmodel.create( {
                    name: "testname",
                    price: 9.99
               })
               const products = await productmodel.index()
               expect(products)
           });
           
           
           it('Fetch all Products', async () => {
               const products = await productmodel.index()
               expect(products);
           });

            
            
            it('Fetch a Product', async function (){
                const products = await productmodel.show(1)
                expect(products);
            });
        });
    
    });
});