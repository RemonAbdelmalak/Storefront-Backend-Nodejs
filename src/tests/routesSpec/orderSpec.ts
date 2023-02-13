import supertest from 'supertest'
import app from '../../server'

describe('GET /api/orders/:id', function () {
    it('respond with json containing a list of all orders', async function (done) {
        supertest(app)
            .get('/api/orders/:id')
            .set('Accept', 'application/json')
            .expect(401, done);
    });
});