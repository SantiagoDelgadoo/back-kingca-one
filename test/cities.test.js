const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest"); //use mocha chai y supertest



describe("GET CITIES", function () { //describe es un cuando armo un grupo de test, aca armo para agarrar las ciudades
    it("Deberia testear que es un array", function (done) { //el it es como un caso, primer caso q sea un array
        request(app) //pedido a la app
            .get("/api/city/") //use get para las peticiones del back (metodo) 
            .expect((response) => { //expect es de supertest (peticion)
                assert.typeOf(response.body.cities, "array", "Es un array"); //assert.typeoff es de chai para verificar el tipo de dato
            })
            .end(function (err, res) { //end es para que finalice
                if (err) {
                    return done(err);
                }

                done();
            });
    });

    it("Deberia testear que es un objeto", function (done) {//el it es como un caso, aca testea que es un objeto
        request(app) //pedido a la app
            .get("/api/city/") //use get para las peticiones del back (metodo)
            .expect((response) => { //expect es de supertest (peticion)
                response.body.cities.forEach((city) => //por cada city q encuentre
                    assert.typeOf(city, "object", "Es un objeto") //con el type off verifica q sea un objeto
                );
            })
            .end(function (err, res) { //end es para que finalice
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
            .post("/api/city/") //uso metodo post para que cuando cree una ciudad lo q mande como name sea un string
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
            .expect(404) //la unica expectativa es que de error 404
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
}); 

describe("DELETE CITIES", function () {
    it("Deberia testear que la ciudad se elimino correctamente", function (done) {
      const id = "6384fd368e9295a5871f875a";
      const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNhYzU4NjBmOTU4MTk3OTdkMTQzMSIsIm5hbWUiOiJTYW50aWFnbyIsInBob3RvIjoiIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoidXNlciIsImlhdCI6MTY2OTY0NDM3NSwiZXhwIjoxNjY5NzMwNzc1fQ.FSuY9iuPZFR6m8BcgqRZBmLMNR8P_tV801POSav_SWA";
  
      request(app)
        .delete(`/api/city/${id}`)
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
  