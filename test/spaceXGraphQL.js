const request = require('supertest');
var validate = require('jsonschema').validate
const expect = require('chai').expect

const spaceXSchema = require('./spaceXSchema')

describe('Space GraphQL API -', ()=>{
    it('verify getting past launch data', async () =>{
        let res = await request('https://api.spacex.land/graphql')
        .post('')
        .send({ 'query':`query {
          launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
            }}}`})
        .set("Accept", "application/json")
        .expect("Content-Type", 'application/json; charset=utf-8')
        .expect(200)
    
        expect(validate(res.text.data, spaceXSchema).errors.length).to.be.equal(0)
    })
})