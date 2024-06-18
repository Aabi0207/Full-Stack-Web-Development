const boxList = document.querySelectorAll(".box-list")
console.log(boxList)

const info = document.querySelector("#info")

info.addEventListener('click', () => {
    removeBorder()
}, true);

boxList.forEach((item, index) => {
    console.log(item)
    item.addEventListener('click', (e) => {
        console.log(e)
        
        addBorder(item, index)
    })
}, true)

document.querySelector("#carsoule").addEventListener('click', () => {
    removeBorder()
    document.querySelectorAll(".carousel-item").forEach((item, index) => {
        if (item.classList.contains('active')) {
            addBorder(boxList[index], index)
        }
    })
})

function addBorder(item, index) {      
    item.classList.add("bg-white")
    item.classList.add("drop-shadow-xl")
    // item.classList.add("border")
    // item.classList.add("border-black")
    // console.log(item.classList)
    // console.log(item.firstElementChild)

    item.firstElementChild.classList.remove("invisible")
    if (index == 0) {
        if(!document.querySelector(".first-item").classList.contains("active")){
            document.querySelector(".first-item").classList.add("active")
        }
        if(document.querySelector(".second-item").classList.contains("active")){
            document.querySelector(".second-item").classList.remove("active")
        }
        if(document.querySelector(".third-item").classList.contains("active")){
            document.querySelector(".third-item").classList.remove("active")
        }
    } else if (index == 1){
        if(document.querySelector(".first-item").classList.contains("active")){
            document.querySelector(".first-item").classList.remove("active")
        }
        if(!document.querySelector(".second-item").classList.contains("active")){
            document.querySelector(".second-item").classList.add("active")
        }
        if(document.querySelector(".third-item").classList.contains("active")){
            document.querySelector(".third-item").classList.remove("active")
        }
    } else{
        if(document.querySelector(".first-item").classList.contains("active")){
            document.querySelector(".first-item").classList.remove("active")
        }
        if(document.querySelector(".second-item").classList.contains("active")){
            document.querySelector(".second-item").classList.remove("active")
        }
        if(!document.querySelector(".third-item").classList.contains("active")){
            document.querySelector(".third-item").classList.add("active")
        }
    }
}

function removeBorder() {
    boxList.forEach((item) => {
        item.classList.remove("bg-white")
        item.classList.remove("drop-shadow-lg")
        item.classList.remove("border")
        item.classList.remove("border-black")
        if (!item.firstElementChild.classList.contains("invisible")){
            item.firstElementChild.classList.add("invisible")
        }
    });
}