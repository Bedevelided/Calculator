// changing theme 

const themeBtn = document.querySelectorAll('.span-btn span');
themeBtn.forEach((btn)=>{
    btn.addEventListener('click' , function(e){
        console.log(e.target)
    })
})