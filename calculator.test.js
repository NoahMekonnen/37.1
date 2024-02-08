const {findMean,findMedian,findMode} = require("./calculator");


describe("Testing the routes", function() {
    test("Checking the /mean route", function() {
      expect(findMean([1,2,3])).toEqual(2)
    })
    test("Checking the /median route", function() {
        expect(findMedian([1,2,3])).toEqual(2)
        expect(findMedian([1,2,3,4])).toEqual(2.5)
    })
    test("Checking the /mode route", function() {
        expect(findMode([1,2,2,3])).toEqual(2)
        expect(findMode([1,2,3,3,3,3,3])).toEqual(3)
    })
})


