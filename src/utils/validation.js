var constraints = {
    email: {
        presence: true,
        format: {
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: '^Invalid email id',
        }
    },
    password: {
        presence: true,
        length: {
            minimum: 4,
            message: '^Password must be at least 4 character long',
        }
    },
    confirmPassword: {
        presence: true,
        equality: 'password'
    }
};



export default constraints
