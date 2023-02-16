import supertest from 'supertest'
import app from '../../server'

const token: string = process.env.TOKEN_SECRET as string;

describe("Order Routes", ()=>{

    describe('GET /api/orders/:id', function () {
        it('respond with json containing an order', async function (done) {
            supertest(app)
                .get('/api/orders/:id')
                .set('Accept', 'application/json')
                .expect(401, done);
        });
    });

    describe('POST /api/orders/create', function () {
        const data = {
            "user_id": "6ff6d3f8-feb8-4eda-9a71-cb25e4089ccf",
            "order_status": "active",
        }
        it('respond with 201 created', async function (done) {
            supertest(app)
            .post('/api/order/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err) => {
                    if (err) return done();
                    done();
                });
        });
    });

    describe('POST /api/addorderproduct/:id', function () {
        const data = {
            "order_id": "db45a30d-382e-4202-8c0c-6e0dcf924e99",
            "product_id": "70a4333a-a9e4-42d2-b94b-f80a803fa0fb",
            "quantity": "20",
        }
        it('respond with 201 created', async function (done) {
            supertest(app)
            .post('/api/addorderproduct/:id')
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