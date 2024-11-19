var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../backend/app");

chai.should();
chai.use(chaiHttp);

describe("getAllData", () => {
    
    it("It should get all data", async () => {
        const res = await chai.request(server).post("/db/getAllData").end((err, response) => {
            response.should.have.status(200);
            done();
        })
    })
});

describe("addData", () => {
    
    it("It should add data", async () => {
        const res = await chai.request(server).post("/db/addData").end((err, response) => {
            response.should.have.status(200);
            done();
        })
    })
});

describe("updateAdded", () => {
    
    it("It should update data field added", async () => {
        const res = await chai.request(server).post("/db/updateAdded").end((err, response) => {
            response.should.have.status(200);
            done();
        })
    })
});

describe("updatePrice", () => {
    
    it("It should update the price of data", async () => {
        const res = await chai.request(server).post("/db/updatePrice").end((err, response) => {
            response.should.have.status(200);
            done();
        })
    })
})




