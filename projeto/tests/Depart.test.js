const assert = require('assert')
const httpMocks = require('node-mocks-http')
const routeHandler = require('../../routes/Depart')

describe('Depart', () => {
  it("Should return departments 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "GET",
      url: "/depart"
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Depart', () => {
  it("Should post departments 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/depart",
      body: {
        department: "yo"
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)

  })
})
describe('Depart', () => {
  it("Should patch departments 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "PATCH",
      url: "/depart",
      body: {
        id: 1,
        department: "Ola"
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
