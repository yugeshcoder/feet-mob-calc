document.getElementById("check").onclick = function(){
  sessionStorage.setItem("ti",1);
  sessionStorage.setItem("tq",1);
  sessionStorage.setItem("tm",1);
  sessionStorage.setItem("ttf",1);

  window.location.href="inputpage.html";
}

document.addEventListener("contextmenu",event => event.preventDefault());

document.onkeydown = function(e){
  if(e.key == 123){
    return false;
  }
  if(e.ctrlKey && e.key == 67){
    return false;
  }
  if(e.ctrlKey && e.key == 85){
    return false;
  }
}
