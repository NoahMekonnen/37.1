// const calculator = require("./calculator");

// const request = require("supertest");
// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use("/", calculator);
// describe("Testing the routes", done => {
//     test("Checking the /mean route", done => {
//         request(app)
//         .get('/mean')
//         .send({'nums': [1,2,3]})
//         .expect({
//             operation: 'mean',
//             value: 2
//         })
//         .expect(200,done)
//     })
//     test("Checking the /median route", done => {
//         request(app)
//         .get('/mean?nums=1,2,3')
//         .expect({
//             operation: 'median',
//             value: 2
//         })
//         .expect(200,done)
//     })
//     test("Checking the /mode route", done => {
//         request(app)
//         .get('/mean?nums=1,2,2,3')
//         .expect({
//             operation: 'mode',
//             value: 2
//         })
//         .expect(200,done)
//     })
// })


const request = require('supertest');

const app = require('./calculator');

describe('Test the /api/greeting route', () => {

 let server;

 // Start the server before the tests

 beforeAll(() => {

   server = app.listen(3000);

 });

 // Close the server after the tests

 afterAll(() => {

   server.close();

 });

 test('It should respond to the GET method', async () => {

   const response = await request(server).get('/mean?nums=1,2,3')
    .expect({
        operation: 'mean',
        value: 2
    })

   expect(response.statusCode).toBe(200);

   expect(response.body).toEqual({ operation: 'mean', value:2 });

 });

});