var sendobj = {
    "name": "小名",
    "money": "1000"
}

let xhr = new XMLHttpRequest();
xhr.open('post', 'http://localhost:3000/posts', true);
xhr.setRequestHeader('Content-type', 'application/json');
let data = JSON.stringify(sendobj);
xhr.send(data);
