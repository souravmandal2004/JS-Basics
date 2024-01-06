let nums = [1, 2, 3, 4, 5];

// for-of loop --> only for iterables
for (let value of nums) {
    console.log (value);
}

// If we want to use for-of loop in objects then we will get error, but using the following code we can use it

let rectangle = {
    length: 1,
    breadth: 2
};

for (let key of Object.entries(rectangle)) {
    console.log (key);
}