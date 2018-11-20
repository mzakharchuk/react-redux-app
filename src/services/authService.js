
let isAuthenticated = false

const authService = {

    isAuthenticated(){
        return isAuthenticated // cookies.get('auth') === true
    },

    signIn(){
        // todo
        isAuthenticated = true
    },
    singOut(){
        // TODO
        isAuthenticated = false
        return isAuthenticated
    }
}
export default authService