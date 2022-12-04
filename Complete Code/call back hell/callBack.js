// normal type
/* setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
*/

//  using function 
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


searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this
    }, () => {
        // if it doesn't work,run this:
    })
}, () => {
    // if API is down, or request failed
})
