var num = [0,1,2,3,4,5,6,7,8,9];

// recuperando apenas os números pares
var num_copy = num.filter(n => (n % 2) == 0);

console.log(num_copy);