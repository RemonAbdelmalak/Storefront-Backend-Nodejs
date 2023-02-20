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

        it('Create User', async () => {
            usermodel.create( {
                first_name: "admin",
                last_name:"admin",
                password:"admin"
           })
           const users = await usermodel.index()
           expect(users)
       });
       
       it('Fetch all Users', async () => {
           const users = await usermodel.index()
           expect(users)
       });
        
        it('fetch a User', async function (){
            const users = await usermodel.show(1)
            expect(users);
        });
    });
});

