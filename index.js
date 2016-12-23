/*
* @Author: Mahesh J
* @Date:   2016-12-23 23:13:05
* @Last Modified by:   Mahesh J
* @Last Modified time: 2016-12-23 23:38:40
*/

'use strict';

var user = require('user');

user.login("Mahesh", "1234", function (userDetails) {
    console.log(userDetails);
}, function (err) {
    console.error(err);
});
