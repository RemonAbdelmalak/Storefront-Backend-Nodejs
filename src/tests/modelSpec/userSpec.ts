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