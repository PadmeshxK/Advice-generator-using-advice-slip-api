const idEle = document.querySelector('.container h1')
const paraEle = document.querySelector('.advice-para')
const btnEle = document.querySelector('.btn')

btnEle.addEventListener('click',changeAdvice)

function changeAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json()
    }).then(adviceData =>{
        const adviceObj = adviceData.slip
        idEle.innerHTML = `ADVICE #${adviceObj.id}`
        paraEle.innerHTML = `&#8220;${adviceObj.advice}&#8221;`
    })
}

changeAdvice()