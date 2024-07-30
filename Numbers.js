let a = 5;
let b ='5';
let e = 6
console.log(a===b); // === so sánh cả kiểu dữ liệu
console.log(a==b); // == ko quan tâm đến kiểu dữ liệu

//trong các phép toán -, *, / js sẽ cố gắng convert string về number
console.log(a*b); // 25

//convert từ string sang number
let c = Number(b); //cách 1
let d = +b; //cách 2

//templete strings 
// giúp code sạch dễ nhìn hơn
console.log(`${a+e} la so nguyen to`); 