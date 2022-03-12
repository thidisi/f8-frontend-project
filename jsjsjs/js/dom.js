
// HTML DOM 

/*
1. Element ID, class, tag,
CSS selector, HTML collection(gần = mảng)
--getElementsByID('ten id') -> ra luon doi tuong (element)->h1...;
--getElementsByClassName('ten class') -> HTML collection [h1... , ];
--getElementsByTagName('ten the') -> 

--querySelector('css: class, id ') ra luon doi tuong (element)
--querySelectorAll -> NodeList(gần = mảng)
2. Attribute
3.Text

*/

var boxNode = document.querySelector('.box-1');

// Công việc 1: Sử dụng tới `boxNode`
// ...
console.log(boxNode);


// Công việc 1: Sử dụng tới các li elements
//  là con của `box-1`

// console.log(boxNode.getElementsByTagName('li')[0]);
/*
console.log(boxNode.querySelectorAll('p')[0]);

var headings = 
    document.getElementsByTagName('li');

for( i = 0; i < headings.length; ++i) {
    console.log(headings[i]);
}
*/

// console.log(document.forms[0]);

//  document.write -> đặt script ở đâu in ra ở đó
// Khi DOM tải xong thì lúc đó document.write sẽ ghi đè lên tất cả và xóa hết trong body

// DOM attributes

var headingElement = 
    document.querySelector('h1');

    // headingElement.title = 'title-text';
    headingElement.setAttribute('data', 'test-data');
// headingElement.setAttribute('href', 'heading');

console.log(headingElement.getAttribute('class')); // lấy value
console.log(headingElement.getAttribute('data')); // lấy value

// innerText, textContent(lấy luôn khoảng cách thật sự trong element)


// geter -> lấy ra 
// seter đặt(thay đổi nội dung của 1 đối tượng)
headingElement.textContent = 'New Heading';
console.log(headingElement.innerText);


// innerHTML( lấy thành phần con bên trong cha), outerHTML ( lấy hết cả cha lẫn con)

var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1>Heading</h1>';

console.log(boxElement.innerHTML);


