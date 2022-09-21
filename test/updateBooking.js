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

describe('Update Booking',() =>{
  it('Verify that the booking is not updated with an invalid token', async ()=>{
  
    const url = `https://restful-booker.herokuapp.com/booking/76`

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

  it('Verify that the booking is not updated with an invalid body', async ()=>{
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