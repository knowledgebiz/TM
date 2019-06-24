const assert = require('assert')
const httpMocks = require('node-mocks-http')
const routeHandler = require('../../routes/EntitiesTypes')

describe('EntityTypes', () => {
  it("Should return Entity Types 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "GET",
      url: "/entities"
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Entity Types', () => {
  it("Should post entity types 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/entities",
      body: {
        type: 'public',
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    console.log(res.statusCode)
    assert(res.statusCode == 200)

  })
})
describe('Entity Types', () => {
  it("Should patch entity types 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "PATCH",
      url: "/entities",
      body: {
        id: 1,
        type: "private"
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Entity Types', () => {
  it("Should delete entity types 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "DELETE",
      url: "/entities",
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
