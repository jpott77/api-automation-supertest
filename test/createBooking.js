const request = require('supertest');
var validate = require('jsonschema').validate
const expect = require('chai').expect

const bookingSchema = require('./schema/bookingSchema')

describe('Positive Booking Scenario -', ()=>{
    it('verify creating a sucessful booking', async () =>{
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