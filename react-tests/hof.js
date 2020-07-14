const numbers = [1, 2, 3, 4, 5];

function createAddNumber(number){
    return function(arr){
        return arr.map(item => item+=number);
    }
}

const addOne = createAddNumber(2);
console.log(addOne(numbers));