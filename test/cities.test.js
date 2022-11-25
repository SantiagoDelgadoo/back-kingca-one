const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest"); 

describe("GET CITIES", function () {
    it("Deberia testear que es un array", function (done) {
        request(app)
            .get("/api/city/")
            .expect((response) => {
                assert.typeOf(response.body.cities, "array", "Es un array");
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                done();
            });
    });

    it("Deberia testear que es un objeto", function (done) {
        request(app)
            .get("/api/city/")
            .expect((response) => {
                response.body.cities.forEach((city) =>
                    assert.typeOf(city, "object", "Es un objeto")
                );
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
}); 





describe("POST CITIES", function () {
    it("Deberia testear que el campo name sea un string", function (done) {
        request(app)
            .post("/api/city/")
            .send({
                name: "Pehuajo",
                continent: "America",
                photo: "https://www.turismodebolsillo.com.ar/media/novedades/1659649567_Pehuajo_Manuelita_IMG_1940.JPG",
                population: "40000",
                userid: "636d39111834aa8ba98269f3"
            })
            .expect((response) => {
                assert.typeOf(response.body.new_city.name, "string", "Es un string");
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
    it("Deberia testear que poniendo mal ruta va a dar un error 404", function (done) {
        request(app)
            .post("/api/cit/")
            .expect(404)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
}); 

