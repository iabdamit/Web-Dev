/*
axios.get("https://swapi.dev/api/peopleaa/1/").then((res) => {
    console.log("RESPONSE:", res)
})
    .catch((e) => {
        console.log("ERROR !", e)
    })
    */


//using Async Function
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    }
    catch (e) {
        console.log("ERROR", e)
    }
}
//getStarWarsPerson(5);
//getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    //here async and await use to get the only text because below one also async
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);

}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }
    catch (e) {
        return "NO JOKES AVAILABLE ! SORRY :("
    }
}
btn.addEventListener('click', addNewJoke)

