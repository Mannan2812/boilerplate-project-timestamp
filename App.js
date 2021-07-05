const express = require('express')
const app = express()


app.get('/api/:date?', (req,res) => {
    var date_string = req.params.date
    if(date_string)
    {
        var timestamp = Date.parse(date_string)
        if(isNaN(timestamp))
        {
            var unix = Number(date_string)
            if(isNaN(unix))
            {
                res.json({
                    "error":"Invalid Date"
                })
            }
            else {
                var d = new Date(unix)
                var utc = d.toUTCString()
                var unix = d.getTime()
                res.json({
                    'unix' : unix,
                    'utc': utc
                })
            }
        }
        else{
            var d = new Date(date_string)
            var utc = d.toUTCString()
            var unix = d.getTime()
            res.json({
                'unix' : unix,
                'utc': utc
            })
        }
    }
    else{
        var d = new Date()
        var utc = d.toUTCString()
        var unix = d.getTime()
        res.json({
            'unix' : unix,
            'utc': utc
        })
    }
})



module.exports = app