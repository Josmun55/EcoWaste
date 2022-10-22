// const async = require('async');
// const axios = require('axios');

const EcoLogic = {

    login: function (param,onSuccess, onError) {

        let loginData = {

            email: 'ecowaste@gmail.com',
            password : 'ecowaste'
        }
        onSuccess(
            {
                data: loginData
            });

        onError({
            data: loginData
        })

    },

    register: function (param,onSuccess, onError) {

        let loginData = {
            fname: 'ecowaste',
            lname: 'member',
            location: 'Nairobi',
            phoneNumber: '712345678',
            estate : 'trm heights'
        }

        onSuccess(
            {
                data: loginData
            });

        onError({

            data: loginData
        })
    },


}

module["exports"] = EcoLogic;