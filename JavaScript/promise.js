function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f1 resolved');
            resolve();
        }, 4000);
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f2 resolved');
            resolve();
        }, 1000);
    });
}

f1().then(f2)
    .catch((err) => {
        console.log('Error:', err);
    });