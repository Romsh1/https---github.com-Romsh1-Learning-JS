// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then(data => console.log(data));
// console.log("Roms");




// Romika Chaudhary
// Day 49

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
}
getTodos();
