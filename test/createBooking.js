const request = require('supertest');
var validate = require('jsonschema').validate
const expect = require('chai').expect

const schema = require('./schema')
const bookingSchema = require('./bookingSchema')

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
      .set('Accept', 'application/json')
      .expect(200)
      
      expect(validate(res.body, bookingSchema).errors.length).to.be.equal(0)
    })
})