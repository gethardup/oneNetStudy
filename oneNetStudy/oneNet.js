/**
 * Created by onenet on 2017/6/12.
 */
var request = require("request");

var options = { method: 'POST',
    url: 'http://api.heclouds.com/devices/7223212/datastreams',
    headers:
        { 'postman-token': '8e87625f-aca6-39c2-8c75-2a9d244c84e2',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'api-key': 'hHYIEVl73LlKhE3AoAPmW5xPaNU=' },
    body:
        { id: 'test2',
            tags: [ 'Tag1', 'Tag2' ],
            unit: 'celsius',
            unit_symbol: 'C',
            cmd: '0003000000184411',
            interval: 60,
            formula: '(A0+A1)*A2' },
    json: true };

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});