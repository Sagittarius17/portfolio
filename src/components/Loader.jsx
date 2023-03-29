// let loader = document.getElementById("preloader")
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })

function showPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
  }
  
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}
  
window.onload = function() {
  hidePreloader();
};
  
  
