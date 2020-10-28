var num = [0,1,2,3,4,5,6,7,8,9];

var total = num.reduce((acm, n) => acm + n);

console.log(total);

var total_mult = num.reduce((acm, n) => acm + n * 2);

console.log(total_mult);