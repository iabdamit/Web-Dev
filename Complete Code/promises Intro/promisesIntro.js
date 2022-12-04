const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout:')
        }
        else {
            success(`Here is your fake date from ${url}`)
        }
    }, delay)
}


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout:')
            }
            else {
                resolve(`Here is your fake date from ${url}`)
            }
        }, delay)
    })
}

// using nested callBack
/*
fakeRequestCallback('books.com/page-1',
    function (response) {
        console.log("IT WORKED");
        console.log(response)
        fakeRequestCallback('books.com/page-2',
            function (response) {
                console.log("IT WORKED again");
                console.log(response)
                fakeRequestCallback('books.com/page-3',
                    function (response) {
                        console.log("IT WORKED again 3rd time");
                        console.log(response)
                    }, function (err) {
                        console.log("error(3rd time)", err);
                    })
            }, function (err) {
                console.log("error (2nd time)", err);
            })
    }, function (err) {
        console.log("error", err);
    });
    */

// using normal promise

/* fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('it worked !! (page-1)')
        //page 2
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('it worked  (page-2)')
                //page 3
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('it worked  (page-3)')
                    }).catch(() => {
                        console.log("oh no  error(page 3)")
                    })
            }).catch(() => {
                console.log("oh no  error(page 2)")
            })
    }).catch(() => {
        console.log("oh no error (page 1)")
    })
    */

// best way to use promise with the return

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('it worked !! (page-1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('it worked !! (page-2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('it worked !! (page-3)')
        console.log(data)
    })
    .catch((err) => {
        console.log("oh no error  request failed")
        console.log(err)
    })