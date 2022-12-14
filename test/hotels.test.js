const chai = require("chai");
const assert = chai.assert;
const app = require("../app");
const request = require("supertest");

describe("POST /api/hotels", function () {
  it("Deberia comprobar estatus de creacion del hotel", function (done) {
    request(app)
      .post("/api/hotel/")
      .send({
        name: "Casino Buenos Aires 8",
        photo:
          "https://choicecasino.com/media/ground_casino_photo/0001/89/thumb_88106_ground_casino_photo_standart.jpg",
        capacity: 15000,
        description:
          "Currently, Casino Buenos Aires has more than 2,000 collaborators who provide services in the different units of the company, whose structure is made up of areas of administration, finance, human resources, operations and security.",
        cityId: "636d5c20033f2a5f173b112e",
        userId: "636d39111834aa8ba98269f0",
      })
      .expect((response) => {
        assert.typeOf(
          response.body.response.capacity,
          "number",
          "Es un numero"
        );
      })
      .expect(201)

      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});

describe("GET /api/hotels", function () {
  it("Deberia comprobar 404 cuando no encuentra un hotel", function (done) {
    request(app)
      .get("/api/hotels/?name=eceocmecoemca}")
      .expect(404)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
describe("DELETE HOTELS", function () {
  it("Deberia testear que el hotel se elimino correctamente", function (done) {
    const id = "6384fda15ee8ed163ced76a6";
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNhYzU4NjBmOTU4MTk3OTdkMTQzMSIsIm5hbWUiOiJTYW50aWFnbyIsInBob3RvIjoiIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoidXNlciIsImlhdCI6MTY2OTY0NDM3NSwiZXhwIjoxNjY5NzMwNzc1fQ.FSuY9iuPZFR6m8BcgqRZBmLMNR8P_tV801POSav_SWA";

    request(app)
      .delete(`/api/hotel/${id}`)
      .auth(token, { type: "bearer" } )
      .expect(201)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

