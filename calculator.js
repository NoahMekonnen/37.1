const express = require('express');
const ExpressError = require('./ExpressError');

const app = express();


app.get('/mean', function (req, res, next) {
    try {
        const nums = request.query.nums
        if (nums.length == 0) {
            throw new ExpressError("Numbers are required", 400)
        }
        let finalSum = 0
        for (let num of nums) {
            if (typeof num != int) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
            finalSum += num
        }
        mean = finalSum / nums.length
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
        let median;
        if (nums.length % 2 == 1) {
            median = nums.length / 2
        } else {
            const upper = Math.ceil(nums.length / 2)
            const lower = Math.floor(nums.length / 2)
            median = (upper + lower) / 2
        }
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
        finalDict = {}
        for (let num of nums) {
            if (!finalDict.num) {
                finalDict.num = 1
            }
            else {
                finalDict.num += 1
            }
        }

        let max = 0
        let mode = -1
        for (key in finalDict.keys) {
            if (finalDict.key > max) {
                max = finalDict.key
                mode = key
            }
        }

        return response.json({
            operation: 'mode',
            value: mode
        });
    }catch{
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

module.exports = app