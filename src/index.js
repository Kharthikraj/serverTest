var element = document.getElementsByClassName("check")
var box = document.getElementById("update")
box.innerText = '0'

Array.from(element).forEach(element =>{
    element.addEventListener('click', ()=>{
        const num = element.innerText
        const boxnum = box.innerText
        const url = `http://localhost:3000/home?id=${num}&prev=${boxnum}`
        fetch(url).then(response => {
            if(!response.ok){
                console.log('Error...')
            }
            return response.json()
        }).then(data => {
            box.innerText = data[0]
        })
    })
})

document.querySelector('.reset').addEventListener('click', () => {
    box.innerText = 0
})

