var _ = require('lodash');

var users = [{
    _id: "1",
    name: "Mahesh",
    pwd: "1233"
}, {
    _id: "2",
    name: "Pramod",
    pwd: "prm"
}, {
    _id: "3",
    name: "Mohan",
    pwd: "mohan"
}];

class User {

    register(userObj, success, fail) {
        // retuns new User object
    }

    login(name, password, success, fail) {
        var user = _.find(users, { name: name, pwd: password });
        if (user) {
            return success(user);
        }
        fail("couldn't find user");
    }
}

module.exports = exports = new User();
