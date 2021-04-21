const ex1_Btn = document.querySelector(".ex1 .btn");
ex1_Btn.onclick = () => {
    let ex1_content = document.querySelector(".ex1 .content");
    let classHidden = false
    ex1_content.classList.forEach(function (item) {
        if (item === 'content--hidden') {
            classHidden = true
        }
    })
    if (classHidden) {
        ex1_content.classList.remove("content--hidden")
    } else {
        ex1_content.classList.add("content--hidden")
    }

}

const ex2_Btn = document.querySelector(".ex2 .btn")
ex2_Btn.onclick = () => {
    let ex2_content = document.querySelector(".ex2 .content")
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ex2_content.style = `background-color : #${randomColor}; box-shadow: -2px 12px 11px 3px #${randomColor}82; `
}

const ex3_Btn = document.querySelector(".ex3 .btn")
console.log(ex3_Btn);
ex3_Btn.onclick = () => {
    let ex3_content1 = document.querySelector(".ex3 .conten1")
    let ex3_content2 = document.querySelector(".ex3 .conten2")
    let textContent1 = ex3_content1.textContent
    let textContent2 = ex3_content2.textContent
    ex3_content1.textContent = textContent2
    ex3_content2.textContent = textContent1
}

const ex4_Btn = document.querySelector(".ex4 .btn");
ex4_Btn.onclick = () => {
    let ex4_content = document.querySelector(".ex4 .content")
    let fontSize = Number(ex4_content.style.fontSize.replace("px", ""))
    if (fontSize === 0) {
        fontSize += 31
    } else {
        fontSize += 1;
    }
    ex4_content.style = `font-size : ${fontSize}px`
    console.log(fontSize.textContent);

}

