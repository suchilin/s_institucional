import $ from 'jquery'

module.exports = {
    login: function(username, pass) {
        if (this.loggedIn()) {
            console.log("one")
            return true;
        }
        return this.getToken(username, pass)

    },

    logout: function() {
        $.ajax({
            type: 'post',
            contentType: "application/json",
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:8000/rest-auth/logout/',
            data: {}
        });
        delete localStorage.token
    },

    loggedIn() {
        return !!localStorage.token
    },

    getToken(username, pass) {
        var resp = 0
        $.ajax({
            type: 'post',
            contentType: "application/json",
            dataType: "json",
            crossDomain: true,
            async:false,
            url: 'http://localhost:8000/rest-auth/login/',
            data: JSON.stringify({
                "username": username,
                "password": pass
            })
        })
        .done(function(res, textStatus, xhr){
            localStorage.token = res.key
            //location.reload();
            resp = xhr.status
        })
        .fail(function(xhr){
            resp = xhr.status
        });
        return resp;
    },

    getUser() {
        var user = ''
        $.ajax({
            type: 'get',
            contentType: "application/json",
            dataType: "json",
            crossDomain: true,
            async:false,
            headers:{
                "Authorization": "Token "+localStorage.token
            },
            url: 'http://localhost:8000/rest-auth/user/'
        })
        .done(function(res, textStatus, xhr){
            user = {
                "pk":res.pk,
                "username":res.username,
                "email":res.email,
                "first_name":res.first_name,
                "last_name":res.last_name,
                "status":xhr.status
            }
        })
        .fail(function(xhr){
            user={
                "status":xhr.status
            }
        })
        return user
    }
}
