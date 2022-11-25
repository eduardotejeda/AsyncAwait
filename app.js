// function greet() {
//     return 'Hello';
// }

async function greet() {
    return "HELLO";
}
greet().then((val) => {
    console.log('Promise resolve with: ', val);
})

async function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers';
    }
    return x + y;
}

add(6,10)
.then((val) => {
    console.log('Promise resolved with: ', val);
})
.catch((err) => {
    console.log('Promise rejected with: ', err);
})

// Async and await

// async function getData() {
//     const res = await axios.get('https://api.publicapis.org/entries');
//     console.log(res.data);
// }

// getData().catch((err) => {
//     console.log('IN CATCH!!!!');
//     console.log(err)
// })

// async function getData() {
// try { 
    
//         const res = await axios.get('https://api.publicapis.org/entries');
//         console.log(res.data);
    
//     } catch (error) {
//     console.log('IN CATCH!', error);
// }
// }

// getData();
async function get3Pokemon() {
const poke1 = await axios.get('https://api.publicapis.org/entries');
console.log(poke1.data);
}

get3Pokemon();