//  async function syntax 
//async function hello() {

//}
// example
/*
const sing = async () => {
    // if we use 'throw' then it will be rejected
    throw "oh no problem!"
    // if we 'return' the promise will be  resolved
    return ' LA LA LA'
}
sing().then((data) => {
    console.log('Promise Resolved with :', data)
})
    .catch((err) => {
        console.log("oh no , promise rejected")
        console.log(err)
    })
    */


const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === 'corigifeetarecute') return "welcome"
    throw 'invalid password'
}
login('akjsdhsa', 'corigifeetarecute')
    .then(msg => {
        console.log('LOGGED IN')
        console.log(msg)
    })
    .catch(err => {
        console.log('error!')
        console.log(err)
    })