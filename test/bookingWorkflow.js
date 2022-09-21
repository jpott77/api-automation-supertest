const request = require('supertest');
const expect = require('chai').expect
var validate = require('jsonschema').validate

const bookingSchema = require('./schema/bookingSchema')
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
      .expect('firstname', 'Julia')
      .expect('lastname', 'Brown')
      .expect('additionalneeds', 'Breakfast,Lunch')

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