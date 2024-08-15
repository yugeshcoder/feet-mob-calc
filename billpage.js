let date = sessionStorage.getItem("date");
document.getElementById("billdate").innerHTML = ` Date : <b style="font-size:1.5rem;">${date} </b>`;

let nam = sessionStorage.getItem("nam");
document.getElementById("billname").innerHTML = ` Name : <b style="font-size:1.5rem;">${nam} </b>`;


let i = Number(sessionStorage.getItem("ti"));

  let x = "tm1",y = "ttf1",z = "bi1",w = "bt1",t="tq1";
  
 
  for(let j = 2; j < i; j++){
  var table = document.getElementById("billtable");
  var row = table.insertRow(1);
  row.innerHTML = `
              <td>${sessionStorage.getItem(t)}</td>
              <td>${sessionStorage.getItem(x)}</td>
              <td id="${y}">${sessionStorage.getItem(y)}</td>
              <td><input id="${z}" type="number"></td>
              <td id="${w}"></td>`;
  x = "tm" + j;
  y = "ttf" + j;
  z = "bi" + j;
  w = "bt" + j;
  t = "tq" + j;
  }

  const billbtn = document.querySelector('.billscreenshot');

billpagescreenshot.addEventListener('click', () => {
  html2canvas(document.querySelector('#billscreenshot'))
    .then(canvas => {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.setAttribute('download','imageName.png');
      a.setAttribute('href',url);
      a.click();
    })
})

document.getElementById("billpagesubmit").onclick = function(){
  let y = "ttf1",z = "bi1",w = "bt1";
  let j = 1;
  let total = 0;

  console.log((Number(document.getElementById(y).textContent)));
  console.log((Number(document.getElementById(z).value)));
  for(let k = 2; k < i; k++){
    let sum =((Number(document.getElementById(y).textContent)) *
             (Number(document.getElementById(z).value)));
             sum = Math.trunc(sum);
        document.getElementById(w).textContent = sum;     
        total += sum;
        j++;
        y = "bpi" + j;
        z = "bi" + j;
        w = "bp" + j;
  }
  total = Math.trunc(total);
  document.getElementById("billtotal").textContent = `Total-Amount : ₹${total}`;
  document.getElementById("bs").style.zIndex = -3;
};

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


