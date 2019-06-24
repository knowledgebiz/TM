const assert = require('assert')
const httpMocks = require('node-mocks-http')
const routeHandler = require('../../routes/Evaluators')

describe('Evaluators', () => {

  it("Should return evaluators 200", ()=>{
    const req = httpMocks.createRequest({
      method: "GET",
      url: "/eva"
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Evaluators', () => {
  it("Should post evaluators  200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/eva",
      body: {
        id_workers: 1,
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    console.log(res.statusCode)
    assert(res.statusCode == 200)

  })
})
describe('Evaluators', () => {
  it("Should patch evaluators 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "PATCH",
      url: "/eva",
      body: {
        id: 1,
        id_workers: 2
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Evaluators', () => {
  it("Should delete evaluators 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "DELETE",
      url: "/eva",
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
