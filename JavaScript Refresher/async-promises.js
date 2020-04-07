//Async Code Example - with callback nesting
setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    })
}, 2000);

const fetchData = callback => {
    setTimeout(() => {
        callback('Callback done!');
    }, 1500);
}

//Promise based async code
setTimeout(() => {
    console.log('Callback timer is done');
    promiseFetchData().then(text => {
        console.log(text);
        return promiseFetchData();
    })
        .then(text2 => {
            console.log(text2);
        })
}, 2000);

const promiseFetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise callback done!');
        }, 1500);
    });
    return promise;
}

