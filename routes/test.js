/**
 * @jest-environment node
 */

const request = require("supertest");
const app = require("../app");

describe('Test routes', () => {

    it('Gets all users data', (done) => {
        request(app)
            .get('/api/users')
            .expect(200)
            .expect((result) => {
                expect(result.body[0].email).toBe("psuser@example.com");
                expect(result.body[0].username).toBe("psuser");
            })
            .end(done);
    });

    it('Gets all users data', (done) => {
        request(app)
            .get('/api/users/2')
            .expect(200)
            .expect((result) => {
                expect(result.body.email).toBe("adminuser@example.com");
                expect(result.body.username).toBe("adminuser");
            })
            .end(done);
    });

});
