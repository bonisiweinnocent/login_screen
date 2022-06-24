
export default function authentication() {

    return {
        // init() {
        // },
        store: [],
        login: {
            email: "",
            password: "",
        
        },
        show: false,
        msg: "You have successfully signup!",
        message: "You are logged in!!",
        signup: {
            email: "",
            password: ""
        },
        registerUser() {
            fetch(`http://localhost:2050/auth/signup`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(this.signup)

            })
                .then(r => r.json())
                .then(usersData => {
                    console.log(usersData)
                    this.store = usersData.data
                    this.msg
                })
                .catch(e => console.log(e))

        },

        loginUser() {
            fetch(`http://localhost:2050/auth/login`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(this.login)

            })
                .then(r => r.json())
                .then(usersData => {
                    if(usersData.msg == 'you have logged in') {
                        this.show = true;
                        this.store = usersData.data
                        this.msg

                    }
                })
                .catch(e => console.log(e))

        },

    }

}


