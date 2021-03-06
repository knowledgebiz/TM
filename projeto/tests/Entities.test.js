const assert = require('assert')
const httpMocks = require('node-mocks-http')
const routeHandler = require('../../routes/Entities')

describe('Entity', () => {
  it("Should return Entity 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "GET",
      url: "/entity"
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
describe('Entity', () => {
  it("Should post entity 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/entity",
      body: {
        id: 1,
        name: "KnowledgeBiz",
        logo: "folder/folder/folder",
        email: "KnowledgeBiz@gmail.com",
        password: "yo",
        description: "ola",
        website_url: "Ola.com",
        entities_types_id: 1,
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    console.log(res.statusCode)
    assert(res.statusCode == 200)

  })
})
describe('Entity', () => {
  it("Should patch entity 200 ", ()=>{
    const req = httpMocks.createRequest({
      method: "PATCH",
      url: "/entity",
      body: {
        name: "KnowledgeBiz",
        email: "knowledgebiz@gmail.com"
      }
    })
    const res = httpMocks.createResponse()
    routeHandler(req,res)
    assert(res.statusCode == 200)
  })
})
