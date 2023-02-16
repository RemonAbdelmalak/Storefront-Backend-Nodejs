import supertest from 'supertest'
import app from '../../server'

const token: string = process.env.TOKEN_SECRET as string;

describe("User Routes", ()=>{

    describe('GET /api/users', function () {
        it('respond with json containing a list of all users', async function (done) {
            supertest(app)
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect(401, done);
        });
    });

    describe('GET /api/users/:id', function () {
        it('respond with json containing a user', async function (done) {
            supertest(app)
                .get('/api/users/:id')
                .set('Accept', 'application/json')
                .expect(401, done);
        });
    });


    describe('POST /api/users/create', function () {
        const data = {
            "first_name": "fnametest",
            "last_name": "lnametest",
            "password": "passwordtest",
        }
        it('respond with 201 created', function (done) {
            supertest(app)
            .post('/api/users/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err) => {
                    if (err) return done();
                    done();
                });
        });
    });
    
});