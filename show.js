const show = () =>{

const but2 = document.querySelector('.but2');
const showcar = document.querySelector('.mem');
const heroback = document.querySelector('.heroblack');
const logo = document.querySelector('.logo');

  but2.addEventListener('click',()=>{
    showcar.classList.add('memshow');
    heroback.classList.add('heroblackshow');
  });

  logo.addEventListener('click',()=>{
     showcar.classList.remove('memshow');
    heroback.classList.remove('heroblackshow');
});
}



show();