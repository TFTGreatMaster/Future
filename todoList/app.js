const datas = 'http://localhost:3000/todos'
const input = document.getElementById('myInput');
const ulItem = document.getElementById('myUL');


function getItems() {
    fetch(datas).then(function (res) {
        return res.json();
    }).then(function (data) {
        if (data.length !== 0) {
            let newLiTag = ""
            data.forEach((element, index) => {
                if (element.completed === true) {
                    newLiTag += `<li class="checked" value="${element.id}">${element.title}<span class="close">x</span></li>`
                } else {
                    newLiTag += `<li value="${element.id}">${element.title}<span class="close">x</span></li>`
                }
            });
            ulItem.innerHTML = newLiTag;
            input.value = '';
        }else {
            ulItem.innerHTML = '<div class="noItem">No Item</div>'
        }
    })
}

getItems()

function newElement() {
    const value = input.value;
    if (input.value !== '') {
        fetch(datas, {
            method: 'POST',
            body: JSON.stringify({
                title: value,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                getItems()
            })
    }
}
ulItem.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        let completeds = false;
        if (e.target.classList.value.indexOf("checked") == -1) {
            completeds = true;
        }
        fetch(`${datas}/${e.target.value}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: e.target.textContent.slice(0, e.target.textContent.lastIndexOf('x')),
                completed: completeds,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                getItems()
            })
    }
    if (e.target.tagName === 'SPAN') {
        console.log(e.target.parentNode.value);
        fetch(`${datas}/${e.target.parentNode.value}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                getItems()
            })
    }
})