const app = require('calculator')
describe("Testing the routes", function(){
    test("Checking the /mean route",function(){
        request(app)
        .get('/mean?nums=1,2,3')
        .expect({
            operation: 'mean',
            value: 2
        })
    })
})