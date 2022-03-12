//  Callback?

// Là hàm (function) được truyền qua đối sô
// khi goi hàm khác

// 1.> Là Hàm
// 2.> Truyền qua đối số
// 3.> Duoc goi lai (trong ham nhan doi so)

function myFunction(param) {
    if(typeof pram === 'function') {
        param("Hoc TKD");   // = myCallback va dang dc coi la Callback
    }
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback);

var courses2 = [
    'Javascript',
    'PHP',
    'Ruby',
    'PHP',
    'Ruby'
];

courses2.length = 10;

// for (var index in courses2) {
//     console.log(courses2[index]); 
// }

/* map2
Array.prototype.map2 = function (callback){
    //console.log(this); // this se la courses2
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i],i);
        output.push(result);
    }

    return output;
};

var htmls = courses2.map2(function(course2) {
    // console.log(index, course2);
    return `<h2>${course2}</h2>`;
});

console.log(htmls.join(''));
*/

/* Foreach2
Array.prototype.forEach2 = function (callback){
    // for/in duyệt qua cả những elem nằm trong proto
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

courses2.forEach2(function(course2, index, array) {
    console.log(course2, index, array);
});
*/

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Java',
        coin: 480,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 840,
        isFinish: true
    }
];

/* filter2
Array.prototype.filter2 = function(callback) {
    var output = []
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var filterCourses = courses.filter2(function(course, index, array) {
    // Ko lap qua array trong
    // console.log(course, index, array);
    return course.coin > 700;
});
console.log(filterCourses);
*/

/* some2
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)) {
                return true;
            };
        }
    }
    return false;
}

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result);
*/

/*reduce

const numbers = [1, 2, ,3 ,4 ,5];


const result2 = numbers.reduce((total, number) => {
    return total + number;
});

console.log(result2);
*/

/* every2
Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result) {
                output =false;
                break;
            }
        }
    }
    return output;
}

var result = courses.every2(function(course, index){
    return course.coin > 480; // kiểm tra theo đk và bắt buộc phải đúng cho cho all in thì trả về true
});
console.log(result);
*/
