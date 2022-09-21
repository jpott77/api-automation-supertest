const request = require('supertest');
const expect = require('chai').expect

describe('Update Booking Scenario -', ()=>{
    it('verify sucessfully updating a booking', async () =>{
      url = `https://restful-booker.herokuapp.com/booking/76`

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