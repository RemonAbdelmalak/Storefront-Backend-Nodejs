import Usermodel from "../../models/user.model";

const usermodel = new Usermodel();

describe("User Model", ()=>{

    describe("Create User Model", ()=>{
        
        it('Should have Create method', ()=>{
            expect(usermodel.create).toBeDefined();
        })
    });
        
    describe("index User Model", ()=>{

        it('Should have index method', ()=>{
            expect(usermodel.index).toBeDefined();
        })
    });

    describe("Show User Model", ()=>{

        it('Should have Show method', ()=>{
            expect(usermodel.show).toBeDefined();
        })
    });

});


describe("Sending data to User Model", ()=>{

    describe("Test User Model methods", ()=>{
        
        it('fetch all User', async function (){
            const user = {
                first_name: "admin",
                last_name:"admin",
                password:"admin"
            }
            await usermodel.create(user)
            const users = await usermodel.index()

            expect(users.length).toBeGreaterThan(0);
        });
        
        it('fetch a User', async function (){
            const users = await usermodel.show('7fc763a5-eeaa-4585-820a-5f3c6f4056ce')
            expect(users);
        });
        
        it('create a User', async function (){
            const user = {
                first_name: "admin",
                last_name:"admin",
                password:"admin"
            }
            await usermodel.create(user)
            const users = await usermodel.index()

            expect(users.length).toBeGreaterThan(0);
        });
    });
});

