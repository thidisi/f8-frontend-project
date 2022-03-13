//  DOM style

/*
var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// su dung them nhieu thuoc tinh  assign() -=> gán
Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'red',
});
*/

// ClassList property

// add them class vao element
// contains kiem tra class nao co trong element nay hay ko
// remove   xoa bo class element
// toggle  kiem tra xem neu class ton tai thi se xoa bo 
//         neu chua ton tai thi no se add class do vao

// kiem tra so luong class
// console.log(boxElement.classList.length);

// boxElement.classList.add('red');

// console.log(boxElement.classList.contains('red'));

// DOM events
// 1. Attribute events
// 2. Assign event using the element node


// onclick bam zo
// sk nổi bọt khi gán onclick vào thẻ con khi click thì hiện lên cả thẻ con lẫn thẻ cha, ông
// onmouseover hover

var heElements = 
    document.querySelectorAll('.heading-text');

    for (var i = 0; i < heElements.length; ++i) {
        heElements[i].onclick = (e) => {
            console.log(e.target);
    }
}

// Input / select
/*
var inputValue = null;
var inputElement = 
    document.querySelector('input[type="text"]');

inputElement.oninput = (e) => {
    inputValue = e.target.value;
}
*/
/*
var inputElement = 
    document.querySelector('input[type="text"]');
    // document.querySelector('select');

inputElement.onkeyup = (e) => {
    console.log(e.which);
}
*/
// Key up / down up la bam vo an luon | down bam vo nha ra moi an

document.onkeyup = function(e){
    switch(e.which) {
        case 27:
            console.log('EXIT');
            break;
        case 13:
        console.log('SEND');
            break;
    }
}