// forEach Function #1
const doubleValues = (arr) => {
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    })
    return newArr;
};

// forEach Function #2
const onlyEvenValues = (arr) => {
    let newArr = [];
    arr.forEach((value) => {
        if (value % 2 == 0) {
            newArr.push(value)
        }
    })
    return newArr;
};

// forEach Function #3 
const showFirstAndLast = (arr) => {
    let newArr = [];
    arr.forEach((str) => {
        let length = str.length - 1;
        let newStr = str.slice(0, 1);
        newStr += str.slice(length, length + 1);
        newArr.push(newStr);
    })
    return newArr;
};

// forEach Function #4
const addKeyAndValue = (arr, key, value) => {
    arr.forEach((obj) => {
        obj[key] = value;
    })
    return arr;
};

// forEach Function #5 
const vowelCount = (str) => {
    let strArr = str.split("");
    let vowelObj = {};
    strArr.forEach((letter) => {
        let vowels = 'aeiou';
        let lower = letter.toLowerCase();
        if (vowels.indexOf(lower) !== -1) {
            if (vowelObj[lower]) {
                vowelObj[lower]++
            } else {
                vowelObj[lower] = 1;
            }
        }
    })
    return vowelObj;
};

// map Function #1
const doublesValuesWithMap = (arr) => {
    return arr.map((num) => {
        return num * 2;
    })
};

// map Function #2
const valTimesIndex = (arr) => {
    return arr.map((value, index) => {
        return value * index;
    })
};

// map Function #3
const extractKey = (arr, key) => {
    return arr.map((obj) => {
        return obj[key];
    })
};

// map Function #4
const extractFullName = (arr) => {
    return arr.map((obj) => {
        return obj.first + ' ' + obj.last
    })
};

// filter Function #1
const filterByValue = (arr, key) => {
    return arr.filter((obj) => {
        return obj[key] !== undefined;
    })
};

// filter Function #2
const find = (arr, number) => {
    return arr.filter((num) => {
        return num === number;
    })[0]
};

// filter Function #3
const findInObj = (arr, key, value) => {
    return arr.filter((obj) => {
        return obj[key] === value;
    })[0]
};

// filter Function #4
const removeVowels = (str) => {
    let lowerString = str.toLowerCase();
    let strArr = lowerString.split('');
    let vowels = 'aeiou';
    let answerArr = strArr.filter((letter) => {
        return vowels.indexOf(letter) == -1;
    })
    return answerArr.join('');
};

// filter Function #5
const doubleOddNumbers = (arr) => {
    let oddArr = arr.filter((num) => {
        return num % 2 == 1;
    });
    return oddArr.map((num) => {
        return num * 2;
    });
};