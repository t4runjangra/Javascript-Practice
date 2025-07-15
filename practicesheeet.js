function printMultiplicationTable(n) {
    let table = ''
    for (let i = 1; i <=10 ; i++) {
    table += `${n} * ${i} = ${n * i} `;
    }
        return table;
}

console.log(printMultiplicationTable(2))