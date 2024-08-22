let count1 = document.querySelector('._1')
let count2 = document.querySelector('._2')
let count3 = document.querySelector('._3')


let load1 = 0
let load2 = 0
let load3 = 0

let interval1 = setInterval(()=>{
    load1 +=100
    count1.innerHTML =  load1
    if (load1 === 12000) {
        clearInterval(interval1)
    }
},20)


let interval2 = setInterval(()=>{
    load2 +=10
    count2.innerHTML =  load2
    if (load2 === 5000) {
        clearInterval(interval2)
    }
},.2)

let interval3 = setInterval(()=>{
    load3 +=10
    count3.innerHTML =  load3
    if (load3 === 7500) {
        clearInterval(interval3)
    }
},2)