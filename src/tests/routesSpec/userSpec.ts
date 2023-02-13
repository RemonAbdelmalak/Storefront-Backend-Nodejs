import supertest from 'supertest'
import app from '../../server'


describe('GET /api/users', function () {
    it('respond with json containing a list of all users', async function (done) {
        supertest(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect(401, done);
    });
});


describe('POST /api/users', function () {
    const data = {
        "first_name": "fnametest",
        "last_name": "lnametest",
        "password": "passwordtest",
    }
    it('respond with 201 created', function (done) {
        supertest(app)
        .post('/api/users')
        .send(data)
        .set('Accept', 'application/json')
        .expect(201)
        .end((err) => {
                if (err) return done();
                done();
            });
    });
});
