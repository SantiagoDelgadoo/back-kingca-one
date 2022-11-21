const chai = require("chai");
const assert = chai.assert;
const app = require("../app");
const request = require("supertest");

describe("POST /api/hotels", function () {
  it("Deberia comprobar estatus de creacion del hotel y tipo de dato en capacity", function (done) {
    request(app)
      .post("/api/hotel/")
      .send({
        name: "Casino Buenos Aires 2",
        photo: [
          "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/04/michel-rathwell.jpg",
          "https://cdn.shortpixel.ai/spai/w_1081+q_+ret_img+to_webp/https://k7f6k2y7.stackpathcdn.com/latinoamerica/wp-content/uploads/sites/2/2020/11/los-casinos-en-buenos-aires-reabriran-antes-del-2021-900x600.jpg",
          "https://choicecasino.com/media/ground_casino_photo/0001/89/thumb_88106_ground_casino_photo_standart.jpg",
        ],
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
