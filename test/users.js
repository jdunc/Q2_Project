process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');
const knex = require('../knex');

beforeEach(done => {
    Promise.all([
        knex('users').insert({
            id: 1,
            name: 'Patti',
            email: 'patti@get.com',
            hashed_password: '111111111111111111111111111111111111111111111111111111111111'
        }),
        knex('users').insert({
            id: 2,
            name: 'Sue',
            email: 'sue@get.com',
            hashed_password: '111111111111111111111111111111111111111111111111111111111111'
        })
    ]).then(() => done());
});

afterEach(done => {
    knex('users').del().then(() => done())
});


describe('GET /users', () => {
    it('responds with JSON', done => {
        request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('returns an array of all users', done => {

        request(app)
        expect(res.body.name).to.equal(['Patti', 'Sue']);
        expect(res.body.email).to.equal(['patti@get.com', 'sue@get.com']);
        expect(res.body.hashed_password).to.equal(['111111111111111111111111111111111111111111111111111111111111', '111111111111111111111111111111111111111111111111111111111111']);
    });
});

xdescribe('POST /users', () => {
    let newUser = {
        user: {
            id: 3,
            name: 'Brittney',
            email: 'car@car.com',
            hashed_password: '111111111111111111111111111111111111111111111111111111111111'
        }
    };

    it('responds with JSON', done => {
        request(app)
            .post('/users')
            .type('form')
            .send(newUser)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('adds the new user to the database', done => {
        request(app)
            .post('/users')
            .type('form')
            .send(newUser)
            .end((err, res) => {
                knex('users').select().then(users => {
                    expect(users).to.have.lengthOf(3);
                    expect(users).to.deep.include(newUser.user);
                    done();
                });
            });
    });

});

xdescribe('PUT /users/:id', () => {
    let updatedUser = {
        user: {
            name: 'Jamie Lannister',
            email: 'jamieLL@aol.com',
            password: '111111111111111111111111111111111111111111111111111111111111'
        }
    };

    it('responds with JSON', done => {
        request(app)
            .put('/users/1')
            .type('form')
            .send(updatedUser)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('updates the user in the database', done => {
        request(app)
            .put('/users/1')
            .type('form')
            .send(updatedUser)
            .end((err, res) => {
                knex('users').where('id', 1).first().then(user => {
                    expect(user.name).to.equal(updatedUser.user.name);
                    expect(user.email).to.equal(updatedUser.user.email);
                    expect(user.password).to.equal(updatedUser.user.password);
                    done();
                });
            });
    });
});

// describe('DEL /users/:id', () => {
//     request(app) //WHAT IS THIS DOING?
//         .delete('/users/1')
//         .type('form')
//         .delete()
//         .end((err, res) => {
//             knex('users').where('id', 1).first()
//             done();
//         });
// });
