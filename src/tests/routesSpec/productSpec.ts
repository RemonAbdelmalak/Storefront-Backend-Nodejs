import supertest from 'supertest'
import app from '../../server'

describe("Product Routes", ()=>{

    describe('GET /api/products', function () {
        it('respond with json containing a list of all products', async function (done) {
            supertest(app)
                .get('/api/products')
                .set('Accept', 'application/json')
                .expect(200, done);
        });
    });

    describe('GET /api/products/:id', function () {
        it('respond with json containing a product', async function (done) {
            supertest(app)
                .get('/api/products/:id')
                .set('Accept', 'application/json')
                .expect(401, done);
        });
    });
    

    describe('POST /api/products/create', function () {
        const data = {
            "name": "pronametest",
            "price": "231.99",
        }
        it('respond with 201 created', async function (done) {
            supertest(app)
            .post('/api/products/create')
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