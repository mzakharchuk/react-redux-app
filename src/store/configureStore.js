if(process.env.NODE_ENV === 'production'){
    module.exports = require('./configureStore.prod')
    console.log('Looks like we are in production mode!')
}else{
    module.exports = require('./configureStore.dev')
    console.log('Looks like we are in development mode!')
}