let a  = 1, b = 1;
let count = 1;
console.log("Aqui estão os 10 primeiro numeros da sequencia fibonacci:");

while (count <= 10){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
}