console.log("Start");

// let promiseObj = new Promise(function(resolve, reject) {
//
// });

let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        if (this.status == 200) {
            resolve(xHttp.responseText);
        } else {
            reject("Error call API");
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
});

promiseObj.then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
})

console.log("End");

