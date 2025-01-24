//your JS code here. If required.
const table = document.querySelector("#output");
const row = document.createElement("tr");
row.setAttribute("id","loading");
row.innerHTML = "<td>Loading...</td>"
table.appendChild(row);

function promise(name){
    let randomTime = ((Math.random()*1+1).toFixed(3));
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name,randomTime});
        });
    });
}

const promise1 = promise("Promise 1");
const promise2 = promise("Promise 2");
const promise3 = promise("Promise 3");

Promise.all([promise1,promise2,promise3]).then((results) => {
    const totalTime = results.reduce((total,result) => total + parseFloat(result.randomTime),0).toFixed(3);

    // aplying for each loop 

    results.forEach(result => {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${result.name}</td><td>${result.randomTime}</td>`;
        table.prepend(newRow);
    });

    table.removeChild(row);
    row.removeAttribute("id");
    row.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    table.appendChild(row);
});




