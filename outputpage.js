
let mod = sessionStorage.getItem("mod");
document.getElementById("outputlabel1").innerHTML = `Model : <b style="font-size:1.5rem;">${mod} </b>`;

let nam = sessionStorage.getItem("nam");
document.getElementById("outputlabel2").innerHTML = ` Name : <b style="font-size:1.5rem;">${nam} </b>`;

let date = sessionStorage.getItem("date");
document.getElementById("outputlabeldate").innerHTML = ` Date : <b style="font-size:1.5rem;">${date} </b>`;

let q = sessionStorage.getItem("q");
document.getElementById("outputlabelq").innerHTML = ` Q : <b style="font-size:1.5rem;">${q} </b>`;


for(let i = 1; i <= 29; i++){
  let x = sessionStorage.getItem("p"+i);
  let y = sessionStorage.getItem("t"+i);
  document.getElementById("op"+i).textContent = x;
  document.getElementById("t"+i).textContent = y;
  console.log(x,y)
}

let showtotal = sessionStorage.getItem("showtotal");
document.getElementById("oshowtotal").textContent = `Total:${showtotal}`;
document.getElementById("outputpageresize").onclick = function(){

  document.getElementById("outputtable").innerHTML = `
  <tr>
    <th>FEET</th>
    <th>PIECES</th>
    <th>TOTAL</th>
  </tr>
  <tr id="or26">
    <td id="of26">9.0</td>
    <td id="op26"></td>
    <td id="t26"></td>
  </tr>
  <tr id="or27">
    <td id="of27">8.9</td>
    <td id="op27"></td>
    <td id="t27"></td>
  </tr>
  <tr id="or28">
    <td id="of28">8.6</td>
    <td id="op28"></td>
    <td id="t28"></td>
  </tr>
  <tr id="or29">
    <td id="of29">8.3</td>
    <td id="op29"></td>
    <td id="t29"></td>
  </tr>  
  <tr id="or1">
    <td id="of1">8.0</td>
    <td id="op1"></td>
    <td id="t1"></td>
  </tr>
  <tr id="or2">
    <td id="of2">7.9</td>
    <td id="op2"></td>
    <td id="t2"></td>
  </tr>
  <tr id="or3">
    <td id="of3">7.6</td>
    <td id="op3"></td>
    <td id="t3"></td>
  </tr>
  <tr id="or4">
    <td id="of4">7.3</td>
    <td id="op4"></td>
    <td id="t4"></td>
  </tr>
  <tr id="or5">
    <td id="of5">7.0</td>
    <td id="op5"></td>
    <td id="t5"></td>
  </tr>
  <tr id="or6">
    <td id="of6">6.9</td>
    <td id="op6"></td>
    <td id="t6"></td>
  </tr>
  <tr id="or7">
    <td id="of7">6.6</td>
    <td id="op7"></td>
    <td id="t7"></td>
  </tr>
  <tr id="or8">
    <td id="of8">6.3</td>
    <td id="op8"></td>
    <td id="t8"></td>
  </tr>
  <tr id="or9">
    <td id="of9">6.0</td>
    <td id="op9"></td>
    <td id="t9"></td>
  </tr>
  <tr id="or10">
    <td id="of10">5.9</td>
    <td id="op10"></td>
    <td id="t10"></td>
  </tr>
  <tr id="or11">
    <td id="of11">5.6</td>
    <td id="op11"></td>
    <td id="t11"></td>
  </tr>
  <tr id="or12">
    <td id="of12">5.3</td>
    <td id="op12"></td>
    <td id="t12"></td>
  </tr>
  <tr id="or13">
    <td id="of13">5.0</td>
    <td id="op13"></td>
    <td id="t13"></td>
  </tr>
  <tr id="or14">
    <td id="of14">4.9</td>
    <td id="op14"></td>
    <td id="t14"></td>
  </tr>
  <tr id="or15">
    <td id="of15">4.6</td>
    <td id="op15"></td>
    <td id="t15"></td>
  </tr>
  <tr id="or16">
    <td id="of16">4.3</td>
    <td id="op16"></td>
    <td id="t16"></td>
  </tr>
  <tr id="or17">
    <td id="of17">4.0</td>
    <td id="op17"></td>
    <td id="t17"></td>
  </tr> 
  <tr id="or18">
    <td id="of18">3.9</td>
    <td id="op18"></td>
    <td id="t18"></td>
  </tr>
  <tr id="or19">
    <td id="of19">3.6</td>
    <td id="op19"></td>
    <td id="t19"></td>
  </tr>
  <tr id="or20">
    <td id="of20">3.3</td>
    <td id="op20"></td>
    <td id="t20"></td>
  </tr>
  <tr id="or21">
    <td id="of21">3.0</td>
    <td id="op21"></td>
    <td id="t21"></td>
  </tr>
  <tr id="or22">
    <td id="of22">2.9</td>
    <td id="op22"></td>
    <td id="t22"></td>
  </tr>
  <tr id="or23">
    <td id="of23">2.6</td>
    <td id="op23"></td>
    <td id="t23"></td>
  </tr>
  <tr id="or24">
    <td id="of24">2.3</td>
    <td id="op24"></td>
    <td id="t24"></td>
  </tr>
  <tr id="or25">
    <td id="of25">2.0</td>
    <td id="op25"></td>
    <td id="t25"></td>
  </tr>`;
}

document.getElementById("outputpagereduce").onclick = function(){
 
  let x = "t1", y = "or1";
  console.log(document.getElementById(x));
  let a = 1;
  for(let i = 0; i < 29; i++){
    let t = document.getElementById(x).textContent;
    if(t == 0){
      document.getElementById(y).remove();
    }
    a++;
    x = "t" + a;
    y = "or" + a;
  }
  document.getElementById("remove").style.zIndex = -4;
}

const btn = document.querySelector('.screenshot');
let i = Number(sessionStorage.getItem("ti"));
let rn = nam +"-"+ i + "-"+date;
outputpagescreenshot.addEventListener('click', () => {
  html2canvas(document.querySelector('#screenshotinfo'))
    .then(canvas => {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.setAttribute('download',`${rn}`);
      a.setAttribute('href',url);
      a.click();
    })
})

document.getElementById("outputpagescreenshot").onclick = function(){

  document.getElementById("screenshot").style.zIndex = -5;

}

document.getElementById("outputpageresize").onclick = function(){

  document.getElementById("outputtable").innerHTML = `
  <tr>
    <th>FEET</th>
    <th>PIECES</th>
    <th>TOTAL</th>
  </tr>
  <tr id="or26">
    <td id="of26">9.0</td>
    <td id="op26"></td>
    <td id="t26"></td>
  </tr>
  <tr id="or27">
    <td id="of27">8.9</td>
    <td id="op27"></td>
    <td id="t27"></td>
  </tr>
  <tr id="or28">
    <td id="of28">8.6</td>
    <td id="op28"></td>
    <td id="t28"></td>
  </tr>
  <tr id="or29">
    <td id="of29">8.3</td>
    <td id="op29"></td>
    <td id="t29"></td>
  </tr>  
  <tr id="or1">
    <td id="of1">8.0</td>
    <td id="op1"></td>
    <td id="t1"></td>
  </tr>
  <tr id="or2">
    <td id="of2">7.9</td>
    <td id="op2"></td>
    <td id="t2"></td>
  </tr>
  <tr id="or3">
    <td id="of3">7.6</td>
    <td id="op3"></td>
    <td id="t3"></td>
  </tr>
  <tr id="or4">
    <td id="of4">7.3</td>
    <td id="op4"></td>
    <td id="t4"></td>
  </tr>
  <tr id="or5">
    <td id="of5">7.0</td>
    <td id="op5"></td>
    <td id="t5"></td>
  </tr>
  <tr id="or6">
    <td id="of6">6.9</td>
    <td id="op6"></td>
    <td id="t6"></td>
  </tr>
  <tr id="or7">
    <td id="of7">6.6</td>
    <td id="op7"></td>
    <td id="t7"></td>
  </tr>
  <tr id="or8">
    <td id="of8">6.3</td>
    <td id="op8"></td>
    <td id="t8"></td>
  </tr>
  <tr id="or9">
    <td id="of9">6.0</td>
    <td id="op9"></td>
    <td id="t9"></td>
  </tr>
  <tr id="or10">
    <td id="of10">5.9</td>
    <td id="op10"></td>
    <td id="t10"></td>
  </tr>
  <tr id="or11">
    <td id="of11">5.6</td>
    <td id="op11"></td>
    <td id="t11"></td>
  </tr>
  <tr id="or12">
    <td id="of12">5.3</td>
    <td id="op12"></td>
    <td id="t12"></td>
  </tr>
  <tr id="or13">
    <td id="of13">5.0</td>
    <td id="op13"></td>
    <td id="t13"></td>
  </tr>
  <tr id="or14">
    <td id="of14">4.9</td>
    <td id="op14"></td>
    <td id="t14"></td>
  </tr>
  <tr id="or15">
    <td id="of15">4.6</td>
    <td id="op15"></td>
    <td id="t15"></td>
  </tr>
  <tr id="or16">
    <td id="of16">4.3</td>
    <td id="op16"></td>
    <td id="t16"></td>
  </tr>
  <tr id="or17">
    <td id="of17">4.0</td>
    <td id="op17"></td>
    <td id="t17"></td>
  </tr> 
  <tr id="or18">
    <td id="of18">3.9</td>
    <td id="op18"></td>
    <td id="t18"></td>
  </tr>
  <tr id="or19">
    <td id="of19">3.6</td>
    <td id="op19"></td>
    <td id="t19"></td>
  </tr>
  <tr id="or20">
    <td id="of20">3.3</td>
    <td id="op20"></td>
    <td id="t20"></td>
  </tr>
  <tr id="or21">
    <td id="of21">3.0</td>
    <td id="op21"></td>
    <td id="t21"></td>
  </tr>
  <tr id="or22">
    <td id="of22">2.9</td>
    <td id="op22"></td>
    <td id="t22"></td>
  </tr>
  <tr id="or23">
    <td id="of23">2.6</td>
    <td id="op23"></td>
    <td id="t23"></td>
  </tr>
  <tr id="or24">
    <td id="of24">2.3</td>
    <td id="op24"></td>
    <td id="t24"></td>
  </tr>
  <tr id="or25">
    <td id="of25">2.0</td>
    <td id="op25"></td>
    <td id="t25"></td>
  </tr>`;

  document.getElementById("resize").style.zIndex = -6;
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
