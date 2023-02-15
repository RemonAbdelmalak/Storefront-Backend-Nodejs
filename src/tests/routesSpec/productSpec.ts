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
    
});