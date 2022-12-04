/*
const fakeRequest = (url) => {
    const rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('your fake data here');
            }
            reject('request error');
        }, 1000)
    })
}

fakeRequest('dogs/1')
    .then((data) => {
        console.log("done with request")
        console.log('data is :', data)
    })
    .catch((err) => {
        console.log('oh No', err)
    })
    */



// color change using call back function
/*
const delayedColorChange = (newColor, Delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, Delay)
}
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('skyblue', 1000, () => {
                        delayedColorChange('magenta', 1000, () => {
                        })
                    })
                })
            })
        })
    })
});
*/

// color change using promises
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('skyblue', 1000))