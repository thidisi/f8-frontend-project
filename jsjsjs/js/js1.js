
let u = 9;
let v = 10;
let f = (++u) - (v--) + (u--) - (++v) - (u++);
//        10  -  10    +    9   -  10  +   9    -  11  +   9
//            = thuc su la 11          = ts la 8

console.log(f);

let a = 9;
let b = 10;
let c = (++a)*2 - (b--)*2 + (++b)*3;
//       10*2    -   10*2   +  10*3 
//            = thuc su la 9

console.log(c);


let k = 36;
let t = 19;
let d = (++k) - (--k) + (++t)- (++k) - (k++) - (k--) + (t--);
//          37  -  36 +    20 -  37  -   37   -  38   +   20

console.log(d);


function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('log1', 'log2', 'log3', 'log4', 'log5');

// Return trong hàm - js

function cong(a, b) {
    return a + b; // return tra ve bat cu kieu du lieu nao
}

var result = cong(2, 8);

console.log(result);

function showMessage() {

}  // Declaration function

var showMessage2 = function testName() {

}  // Expression function

setTimeout(function testName() {

});  // Expression function

var myObject = {
    myFunction: function testName() {

    }
}  // Expression function


// su dung toan tu noi chuoi
/*
var fullName = "mot so case su dung backslash"
+ "mot so case su dung backslash"
+ "mot so case su dung backslash"
;
*/

/*

var firstName = 'IS';
var lastName = 'Kia'

console.log(`Toi la : ${firstName} ${lastName}` );
*/


//  Object constructor -> doi tuong

//  ham tao (ban thiet ke)
var User = function(firstName, lastName, avatar) {
    this.firstName = firstName; // this nay cua User
    this.lastName = lastName;// this nay cua User
    this.avatar = avatar;// this nay cua User
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`; // this cua getName
    }
}
// Oject prototype 
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

// doi tuong
var author = new User('Gio', 'Le', 'Avatar');
var user = new User('Vu', 'To', 'Avatar');

// co the co phuong thuc thuoc tinh rieng
author.title = 'Chia se dao tao thui';
user.comment = 'lieu co binh luan nao hay ko';

// console.log(author.getClassName());
console.log(author);
console.log(user);
// console.log(author.getName());
// console.log(user.getName());

// Doi tuong Date

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();


console.log(`${day}/${month}/${year}`);

/*
Math object

- Math.PI
- Math.round() làm tròn số nguyên
- Math.abs()   giá trị tuyệt đối
- Math.ceil()   làm tròn trên vd 4.0001 => 5
- Math.floor()   làm tròn dưới vd 4.99999 => 4
- Math.random()
- Math.min()
- Math.max()

*/

// console.log(Math.floor(Math.random() *10)); // random tu 0-9

var random = Math.floor(Math.random() *100);

if(random < 50) {
    console.log('Cuong hoa thanh cong!');
} else {
    console.log('Cuong hoa that bai!');
}

/*
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
];
console.log(bonus[random]);
*/

//  Cau lenh re nhanh - if else

// Cau lenh re nhanh - Switch

var date = 2;

switch(date) {
    case 2: // ===
        console.log('hom nay la thu 2');
        break; // dung lai\\neu ko co break thi no van lot xuong default

    default:
        console.log('mai biet');
};

//  Toan tu 3 ngoi - Ternary operator


var course = {
    nam: 'Javascript',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : `Miễn phí`;
//          vế thứ nhất điều kiện --- vế thứ 2 là kết quả được in ra nếu coin > 0 --- vế thứ 3 nếu coin = 0 thì ra kết quả Miễn phí

console.log(result);


// Vòng lặp -loop
var i = 1
for(; i < 11; i++) {
    if( i === 6){
        continue;
    }
    if(i > 7){
        break;
    }
    console.log(`"Chào người thứ" ${i}`);
}
    
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
];

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(`"For" ${myArray[i]}`); // nhu nhau
}

// For/in

for( var key in myArray) {
    console.log(`"For/in" ${myArray[key]}`); // nhu nhau
};

// For/of

for( var value of myArray) {
    console.log(`"For/of" ${value}`); // nhu nhau
};

//  For/of    khi sử dụng kiểu object thì trong vòng lặp for/of thay đổi tên và thêm phần Object.keys(tên object) | Object.values(tên object) để nó có thể thay thế kiểu array mới có thể thực thi


// For/in

var myInfo = {
    name: 'Gio',
    age: 18,
    address: 'Ha noi'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
};

// while
var i = 1;
while( i < 5){
    console.log(`"Chào người thứ" ${i}`);
    i++;
};

// Do/while
var i = 0;
do {
    i++;
    console.log(i);
} while ( i < 5)

function kiemTraSoChanLe(n) {
    return n % 2 ===0 ? true : false;
};

var check = kiemTraSoChanLe(225);

if(check) {
    console.log("so chan");
} else {
    console.log("so le");
}
// Bonus

for(var i = 100; i >= 0; i -= 5) {
    console.log(i);
}


//  Đệ quy là hàm nó gọi hàm lại nó

//  Array Method

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,

    },

    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,

    },

    {
        id: 3,
        name: 'Java',
        coin: 250,

    },

    {
        id: 4,
        name: 'Ruby',
        coin: 250,

    },

    {
        id: 5,
        name: 'PHP',
        coin: 100,

    },
];

// courses.forEach(function(course) {
//     console.log(course);
// });

/*
var courseHandler = function(course, index) {
    // console.log(course);
    // return 123; // đại loại là nó return cái j thì cái vị trí của elm nó trong cái mảng newCourses sẽ nhận dc cái đó
    // return {
    //     id: course.id,
    //     name:`Khoa hoc: ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Gia: ${course.coin}`,
    //     index: index,
    // }

    return `<h2>${course.name}</h2>`;
}

var newCourses = courses.map(courseHandler); // returnt mang moi

console.log(newCourses.join(''));
*/

// Biến lưu trữ
// var totalCoin = 0;

//  Lặp qua các phần tử
// for (var course of courses) {

    // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// console.log(totalCoin);


//var i = null;
// Biến lưu trữ | Gía trị hiện tại | Chi muc | courses => tro ve cung 1 bo nho
//                   accumulator, currentValue, currentIndex, originArray
/*
function coinHandler(a, b) {
    //i++;

    // var total = accumulator + currentValue.coin;

    // console.table({
    //     'Luot chay: ': i,
    //     'Bien tich tru: ': accumulator,
    //     'Gia khoa hoc: ': currentValue,
    //     'Tich tru duoc: ': total
    // });

    return a + b.coin;
}
//                             đối số  -- giá trị khởi tạo gán cho accumulator = 0
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);
*/

// ngan gon

//  total = accumulator course = currentValue
var totalCoin = courses.reduce(function(total, course){
    return total + course.coin;
}, 0);

console.log(totalCoin);

