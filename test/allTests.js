const request = require('supertest');
const expect = require('chai').expect
var validate = require('jsonschema').validate

const ENDPOINT = 'https://restful-booker.herokuapp.com/booking'

const schema = require('./schema')
const bookingSchema = require('./bookingSchema')
let bookingId = 0

describe('Full Booking Path', ()=>{

  it('verify multistep API workflow ', async () =>{
    let url = 'https://restful-booker.herokuapp.com/booking'

    let res = await request(url)
    .post('/')
    .send({
      "firstname" : "Julia",
      "lastname" : "Brown",
      "totalprice" : 567,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2020-01-01",
          "checkout" : "2021-01-01"
      },
      "additionalneeds" : "Breakfast,Lunch"
    })
    .set('Accept', 'application/json');

    bookingId = res.body.bookingid

    expect(res.statusCode).to.be.equal(200)
    
    expect(validate(res.body, bookingSchema).errors.length).to.be.equal(0)

    // Use Id to get booking details
    request(`https://restful-booker.herokuapp.com/booking/${bookingId}`)
      .get('')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
          expect(response.body.firstname, 'Julia')
          expect(response.body.lastname, 'Brown')
          expect(response.body.additionalneeds, 'Breakfast,Lunch')
      })

    // Use Id to update booking details
    url = `https://restful-booker.herokuapp.com/booking/${bookingId}`

    let putResponse = await request(url)
    .put('/')
    .send({
        "firstname" : "JuliaUpdate",
        "lastname" : "Browns",
        "totalprice" : 567,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2020-01-01",
            "checkout" : "2021-01-01"
        },
        "additionalneeds" : "Breakfast,Dinner"
    })
    .set('Accept', 'application/json')
    .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQxMjM=')
    .expect(200)

    expect(putResponse.body.firstname).to.equal('JuliaUpdate')
    expect(putResponse.body.lastname).to.equal('Browns')
    expect(putResponse.body.additionalneeds).to.equal('Breakfast,Dinner')
  })
})

describe('Get all posts', ()=>{
  it('verify correct response for valid get post', async ()=>{
    let res = await request('https://jsonplaceholder.typicode.com/posts').get('')
  
    expect(res.statusCode).to.be.equal(200)
    expect(validate(res.body, schema).errors.length).to.be.equal(0)
  })
})

describe('Update Post',() =>{
  it('Verify that the post is not updated with an invalid token', async ()=>{
    const url = `https://restful-booker.herokuapp.com/booking/${bookingId}`

  request(url)
    .put('/')
    .send({
      "firstname" : "Julia",
      "lastname" : "Browns",
      "totalprice" : 567,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2020-01-01",
          "checkout" : "2021-01-01"
      },
      "additionalneeds" : "Breakfast,Lunch"
    })
    .set('Accept', 'application/json')
    .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQxMjM')
    .expect(403)
    .expect('Forbidden')
  })

  it('Verify that the post is not updated with an invalid body', async ()=>{
      const url = 'https://restful-booker.herokuapp.com/booking/10'

      request(url)
        .put('/')
        .send({
          "lastname" : "Potting",
          "totalprice" : 111,
          "depositpaid" : true,
          "bookingdates" : {
              "checkin" : "2018-01-01",
              "checkout" : "2019-01-01"
          },
          "additionalneeds" : "Breakfast"
        })
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQxMjM=')
        .expect(400)
        .expect('Bad Request')
  })
})