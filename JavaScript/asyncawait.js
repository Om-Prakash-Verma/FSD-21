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

function f(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f resolved');
            resolve();
        }, 2000);
    });
}

async function test(){
    try{
        await f1();
        await f2();
    }
    catch(err){
        console.log('Error:', err);
    }
}