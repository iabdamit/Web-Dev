/*
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("resolved!", res)
        // it doesnot give data which is present inside body
        return res.json();
    })
    .then((data) => {
        console.log("JSON DONE", data);
    })
    .catch((e) => {
        console.log('error!', e)
    })
    */

/* 
// nested fetch
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("resolved!", res)
        return res.json();
    })
    .then((data) => {
        console.log("JSON DONE", data);
        return fetch("https://swapi.dev/api/people/2/")
            .then((res) => {
                console.log("  second resolved!", res)
                return res.json();
            })
            .then((data) => {
                console.log("JSON DONE", data);
            })
    })
    .catch((e) => {
        console.log('error!', e)
    });
    */

const loadStarWarspeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log("ERROR!", e)
    }
}
loadStarWarspeople();