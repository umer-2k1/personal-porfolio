// let activePage = window.location.pathname
// const navLinks = document.querySelectorAll('nav li a').forEach((links)=>{
//     if (links.href.includes(activePage)) {
//         links.classList.add("active-links")
        
//     }
// })



const counters = document.querySelectorAll('.counter')

counters.forEach((elem)=>{
    increamentCounter(elem)
})

function increamentCounter(element){
    let initialValue = +element.innerText
    let targetedValue= parseInt(element.getAttribute('data-target'))
    let increment = targetedValue/1000


    if (initialValue < targetedValue) {
        element.innerText = Math.ceil(increment+initialValue)
        setTimeout(() => {
            increamentCounter(element)
        }, 0.1);
    }
    else{
        element.innerText = targetedValue
    }
    }