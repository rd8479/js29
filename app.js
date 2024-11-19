function first_change(list){
    for (const i of list) {
        const num1=Math.floor(Math.random() * 256);
        const num2=Math.floor(Math.random() * 256);
        const num3=Math.floor(Math.random() * 256);
        i.style=`background-color:rgb(${num1},${num2},${num3})`
    }
    style=`background-color:rgb(${num1},${num2},${num3})`
}
function change(event){
    const num1=Math.floor(Math.random() * 256);
    const num2=Math.floor(Math.random() * 256);
    const num3=Math.floor(Math.random() * 256);
    event.target.style=`background-color:rgb(${num1},${num2},${num3})`
    console.log(event)
    event.target.removeEventListener('click',change)
}
const torf=0
const box=document.querySelectorAll('.card')
for (let i=0;i<box.length;i++) {
    box[i].addEventListener('click',change)
}
first_change(box)