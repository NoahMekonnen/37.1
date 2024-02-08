const express = require('express');
const ExpressError = require('./ExpressError');

const app = express();

function findMean(nums) {

    nums.sort()
    let finalSum = 0
    for (let num of nums) {
        if (typeof num != "number") {
            throw new ExpressError(`${num} is not a number`, 400)
        }
        finalSum += num
    }
    if (nums.length > 0) {
        mean = finalSum / nums.length
    }
    else mean = 0
    return mean
}

function findMedian(nums) {
    nums.sort()
    let median;
    if (nums.length % 2 == 1) {
        median = nums[Math.floor(nums.length / 2)]
    } else {
        const upper = nums[(nums.length / 2)]
        const lower = nums[((nums.length / 2) - 1)]
        median = (upper + lower) / 2
    }
    return median
}

function findMode(nums) {
    nums.sort()
    finalDict = {}
    for (let num of nums) {
        if (!finalDict[num]) {
            finalDict[num] = 1
            console.log(num)
        }
        else {
            finalDict[num] += 1
            console.log(num)
        }
    }

    let max = 0
    let mode = -1
    for (let key of Object.keys(finalDict)) {
        if (finalDict[key] > max) {
            max = finalDict[key]
            mode = key
        }
    }
    return parseInt(mode)
}

app.get('/mean', function (req, res, next) {
    try {
        const nums = request.query.nums
        if (nums.length == 0) {
            throw new ExpressError("Numbers are required", 400)
        }
        const mean = findMean(nums)
        return response.json({
            operation: 'mean',
            value: mean
        });
    } catch {
        next()
    }
});

app.get('/median', function (req, res, next) {
    try {
        const nums = request.query.nums
        if (nums.length == 0) {
            throw new ExpressError("Numbers are required", 400)
        }
        for (let num of nums) {
            if (typeof num != int) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
        }
        const median = findMedian(nums)
        return response.json({
            operation: 'median',
            value: median
        });
    } catch {
        next()
    }
})

app.get('/mode', function (req, res, next) {
    try {
        const nums = request.query.nums
        if (nums.length == 0) {
            throw new ExpressError("Numbers are required", 400)
        }
        for (let num of nums) {
            if (typeof num != int) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
        }
        const mode = findMode(nums)

        return response.json({
            operation: 'mode',
            value: mode
        });
    } catch {
        next()
    }
})


app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
})

module.exports = { findMean, findMedian, findMode }