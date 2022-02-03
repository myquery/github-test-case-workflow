const chai = require("chai");
const request = require("supertest")
const app = require("../index");

chai.should();

describe("Test Simple Node.js Endpoint", ()=> {
    it("test on simple nodejs endpoint", (done)=> {
        request(app).get("/test").then((err, res)=> {
            if(err) throw err
            res.should.have.status(200)
        })
        done()
    })
})