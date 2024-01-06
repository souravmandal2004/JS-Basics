function interest (p, y, r=10) {
    return p*r*y/100;
}

let ans = interest (100, 5);
console.log (ans);