const request = require('supertest');
var validate = require('jsonschema').validate
const expect = require('chai').expect

const postSchema = require('./schema/postSchema')

describe('Get all posts', ()=>{
  it('verify correct response for valid get post', async ()=>{
    let res = await request('https://jsonplaceholder.typicode.com/posts').get('')
  
    expect(res.statusCode).to.be.equal(200)
    expect(validate(res.body, postSchema).errors.length).to.be.equal(0)
  })
})