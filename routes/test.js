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

});
