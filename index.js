
let showtotal = 0;


let f1 = 8;let f2 = 7.75;let f3 = 7.50;let f4 = 7.25;let f5 = 7.0;let f6 = 6.75;let f7 = 6.50;let f8 = 6.25;let f9 = 6.0;let f10 = 5.75;let f11 = 5.5;
let f12 = 5.25;let f13 = 5.0;let f14 = 4.75;let f15 = 4.50;let f16 = 4.25;let f17 = 4.0;let f18 = 3.75;let f19 = 3.5;let f20 = 3.25;let f21 = 3.0;
let f22 = 2.75;let f23 = 2.5;let f24 = 2.25;let f25 = 2.0;let f26 = 9.0;let f27 = 8.75;let f28 = 8.5;let f29 = 8.25;

let p1 = p2 = p3 = p4 = p5= p6 = p7= p8= p9= p10= p11= p12 =p13 =p14 =p15 = p16 = p17 =p18 = p19 =p20 =p21 =p22 =p23 =p24 =p25 =p26 = p27 =p28 =p29 = 0;
let t1 = t2 = t3 = t4 = t5= t6 = t7= t8= t9= t10= t11= t12 =t13 =t14 =t15 = t16 = t17 =t18 = t19 =t20 =t21 =t22 =t23 =t24 =t25 =t26 = t27 =t28 =t29 = 0;
let i1 = i2 = i3 = i4 = i5= i6 = i7= i8= i9= i10= i11= i12 =i13 =i14 =i15 = i16 = i17 =i18 = i19 =i20 =i21 =i22 =i23 =i24 =i25 =i26 = i27 =i28 =i29 = 0;






document.getElementById("inputpageplus").onclick = function check(){
  

  let q = document.getElementById("q").value;
  sessionStorage.setItem("q",q);

  let model = document.getElementById("mod").value;
  sessionStorage.setItem("mod",model);

  
  let tin = Number(sessionStorage.getItem("ti"))+1;
  let tqn = Number(sessionStorage.getItem("tq"));
  let tmn = Number(sessionStorage.getItem("tm"));
  let ttfn = Number(sessionStorage.getItem("ttf"));

  sessionStorage.setItem("ti",tin);

  sessionStorage.setItem("tq"+tqn,q);
  sessionStorage.setItem("tq",tqn+1);

  sessionStorage.setItem("tm"+tmn,model);
  sessionStorage.setItem("tm",tmn+1);

  sessionStorage.setItem("ttf"+ttfn,showtotal);
  sessionStorage.setItem("ttf",ttfn+1);

  console.log(sessionStorage.getItem("ti"),sessionStorage.getItem("tq1"),
  sessionStorage.getItem("tm1"),sessionStorage.getItem("ttf1"));
  console.log(sessionStorage.getItem("ti"),sessionStorage.getItem("tq2"),
  sessionStorage.getItem("tm2"),sessionStorage.getItem("ttf2"));


  let name = document.getElementById("nam").value;
  sessionStorage.setItem("nam",name);
 
  let date = document.getElementById("date").value;
  sessionStorage.setItem("date",date);
  


 sessionStorage.setItem("p1",p1);
 sessionStorage.setItem("t1",t1);

 sessionStorage.setItem("p2",p2);
 sessionStorage.setItem("t2",t2);

 sessionStorage.setItem("p3",p3);
 sessionStorage.setItem("t3",t3);

 sessionStorage.setItem("p4",p4);
 sessionStorage.setItem("t4",t4);

 sessionStorage.setItem("p5",p5);
 sessionStorage.setItem("t5",t5);

 sessionStorage.setItem("p6",p6);
 sessionStorage.setItem("t6",t6);

 sessionStorage.setItem("p7",p7);
 sessionStorage.setItem("t7",t7);

 sessionStorage.setItem("p8",p8);
 sessionStorage.setItem("t8",t8);

 sessionStorage.setItem("p9",p9);
 sessionStorage.setItem("t9",t9);

 sessionStorage.setItem("p10",p10);
 sessionStorage.setItem("t10",t10);

 sessionStorage.setItem("p11",p11);
 sessionStorage.setItem("t11",t11);

 sessionStorage.setItem("p12",p12);
 sessionStorage.setItem("t12",t12);

 sessionStorage.setItem("p13",p13);
 sessionStorage.setItem("t13",t13);

 sessionStorage.setItem("p14",p14);
 sessionStorage.setItem("t14",t14);

 sessionStorage.setItem("p15",p15);
 sessionStorage.setItem("t15",t15);

 sessionStorage.setItem("p16",p16);
 sessionStorage.setItem("t16",t16);

 sessionStorage.setItem("p17",p17);
 sessionStorage.setItem("t17",t17);

 sessionStorage.setItem("p18",p18);
 sessionStorage.setItem("t18",t18);

 sessionStorage.setItem("p19",p19);
 sessionStorage.setItem("t19",t19);

 sessionStorage.setItem("p20",p20);
 sessionStorage.setItem("t20",t20);

 sessionStorage.setItem("p21",p21);
 sessionStorage.setItem("t21",t21);

 sessionStorage.setItem("p22",p22);
 sessionStorage.setItem("t22",t22);

 sessionStorage.setItem("p23",p23);
 sessionStorage.setItem("t23",t23);

 sessionStorage.setItem("p24",p24);
 sessionStorage.setItem("t24",t24);

 sessionStorage.setItem("p25",p25);
 sessionStorage.setItem("t25",t25);

 sessionStorage.setItem("p26",p26);
 sessionStorage.setItem("t26",t26);

 sessionStorage.setItem("p27",p27);
 sessionStorage.setItem("t27",t27);

 sessionStorage.setItem("p28",p28);
 sessionStorage.setItem("t28",t28);

 sessionStorage.setItem("p29",p29);
 sessionStorage.setItem("t29",t29);

  sessionStorage.setItem("showtotal",showtotal); 
  document.getElementById("inputzl").style.zIndex = 1;
}


document.getElementById("enterbtn").onclick = function(){
  calc();
}


function calc(){

  i1 = Number(document.getElementById("n1").value);
  p1 += i1;
  t1 = f1*p1;
  document.getElementById("n1").value = "";
  if(i1 !== 0){
    document.getElementById("c1").textContent = i1;
  }

  i2 = Number(document.getElementById("n2").value);
  p2 += i2;
  t2 = f2*p2;
  document.getElementById("n2").value = "";
  if(i2 !== 0){
    document.getElementById("c2").textContent = i2;
  }

  i3 = Number(document.getElementById("n3").value);
  p3 += i3;
  t3 = f3*p3;
  document.getElementById("n3").value = "";
  if(i3 !== 0){
    document.getElementById("c3").textContent = i3;
  }

  i4 = Number(document.getElementById("n4").value);
  p4 += i4;
  t4 = f4*p4;
  document.getElementById("n4").value = "";
  if(i4 !== 0){
    document.getElementById("c4").textContent = i4;
  }

  i5 = Number(document.getElementById("n5").value);
  p5 += i5;
  t5 = f5*p5;
  document.getElementById("n5").value = "";
  if(i5 !== 0){
    document.getElementById("c5").textContent = i5;
  }

  i6 = Number(document.getElementById("n6").value);
  p6 += i6;
  t6 = f6*p6;
  document.getElementById("n6").value = "";
  if(i6 !== 0){
    document.getElementById("c6").textContent = i6;
  }

  i7 = Number(document.getElementById("n7").value);
  p7 += i7;
  t7 = f7*p7;
  document.getElementById("n7").value = "";
  if(i7 !== 0){
    document.getElementById("c7").textContent = i7;
  }

  i8 = Number(document.getElementById("n8").value);
  p8 += i8;
  t8= f8*p8;
  document.getElementById("n8").value = "";
  if(i8 !== 0){
    document.getElementById("c8").textContent = i8;
  }

  i9 = Number(document.getElementById("n9").value);
  p9 += i9;
  t9 = f9*p9;
  document.getElementById("n9").value = "";
  if(i9 !== 0){
    document.getElementById("c9").textContent = i9;
  }


  i10 = Number(document.getElementById("n10").value);
  p10 += i10;
  t10 = f10*p10;
  document.getElementById("n10").value = "";
  if(i10 !== 0){
    document.getElementById("c10").textContent = i10;
  }

  i11 = Number(document.getElementById("n11").value);
  p11 += i11;
  t11 = f11*p11;
  document.getElementById("n11").value = "";
  if(i11 !== 0){
    document.getElementById("c11").textContent = i11;
  }

  i12 = Number(document.getElementById("n12").value);
  p12 += i12;
  t12 = f12*p12;
  document.getElementById("n12").value = "";
  if(i12 !== 0){
    document.getElementById("c12").textContent = i12;
  }

  i13 = Number(document.getElementById("n13").value);
  p13 += i13;
  t13 = f13*p13;
  document.getElementById("n13").value = "";
  if(i13 !== 0){
    document.getElementById("c13").textContent = i13;
  }

  i14 = Number(document.getElementById("n14").value);
  p14 += i14;
  t14 = f14*p14;
  document.getElementById("n14").value = "";
  if(i14 !== 0){
    document.getElementById("c14").textContent = i14;
  }

  i15 = Number(document.getElementById("n15").value);
  p15 += i15;
  t15 = f15*p15;
  document.getElementById("n15").value = "";
  if(i15 !== 0){
    document.getElementById("c15").textContent = i15;
  }

  i16 = Number(document.getElementById("n16").value);
  p16 += i16;
  t16 = f16*p16;
  document.getElementById("n16").value = "";
  if(i16 !== 0){
    document.getElementById("c16").textContent = i16;
  }

  i17 = Number(document.getElementById("n17").value);
  p17 += i17;
  t17 = f17*p17;
  document.getElementById("n17").value = "";
  if(i17 !== 0){
    document.getElementById("c17").textContent = i17;
  }

  i18 = Number(document.getElementById("n18").value);
  p18 += i18;
  t18 = f18*p18;
  document.getElementById("n18").value = "";
  if(i18 !== 0){
    document.getElementById("c18").textContent = i18;
  }

  i19 = Number(document.getElementById("n19").value);
  p19 += i19;
  t19 = f19*p19;
  document.getElementById("n19").value = "";
  if(i19 !== 0){
    document.getElementById("c19").textContent = i19;
  }

  i20 = Number(document.getElementById("n20").value);
  p20 += i20;
  t20 = f20*p20;
  document.getElementById("n20").value = "";
  if(i20 !== 0){
    document.getElementById("c20").textContent = i20;
  }

  i21 = Number(document.getElementById("n21").value);
  p21 += i21;
  t21 = f21*p21;
  document.getElementById("n21").value = "";
  if(i21 !== 0){
    document.getElementById("c21").textContent = i21;
  }

  i22 = Number(document.getElementById("n22").value);
  p22 += i22;
  t22 = f22*p22;
  document.getElementById("n22").value = "";
  if(i22 !== 0){
    document.getElementById("c22").textContent = i22;
  }

  i23 = Number(document.getElementById("n23").value);
  p23 += i23;
  t23 = f23*p23;
  document.getElementById("n23").value = "";
  if(i23 !== 0){
    document.getElementById("c23").textContent = i23;
  }

  i24 = Number(document.getElementById("n24").value);
  p24 += i24;
  t24 = f24*p24;
  document.getElementById("n24").value = "";
  if(i24 !== 0){
    document.getElementById("c24").textContent = i24;
  }

  i25 = Number(document.getElementById("n25").value);
  p25 += i25;
  t25 = f25*p25;
  document.getElementById("n25").value = "";
  if(i25 !== 0){
    document.getElementById("c25").textContent = i25;
  }

  i26 = Number(document.getElementById("n26").value);
  p26 += i26;
  t26 = f26*p26;
  document.getElementById("n26").value = "";
  if(i26 !== 0){
    document.getElementById("c26").textContent = i26;
  }

  i27 = Number(document.getElementById("n27").value);
  p27 += i27;
  t27 = f27*p27;
  document.getElementById("n27").value = "";
  if(i27 !== 0){
    document.getElementById("c27").textContent = i27;
  }

  i28 = Number(document.getElementById("n28").value);
  p28 += i28;
  t28 = f28*p28;
  document.getElementById("n28").value = "";
  if(i28 !== 0){
    document.getElementById("c28").textContent = i28;
  }

  i29 = Number(document.getElementById("n29").value);
  p29 += i29;
  t29 = f29*p29;;
  document.getElementById("n29").value = "";
  if(i29 !== 0){
    document.getElementById("c29").textContent = i29;
  }
  showtotal = (t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11+t12+t13+t14+t15+t16+t17+t18+t19+t20+t21+t22+t23+t24+t25+t26+t27+t28+t29);
  document.getElementById("showtotal").textContent = `Total:${showtotal}`;
  

  document.getElementById("7p").textContent = (p26+p27+p28+p29+p1+p2+p3+p4+p5)/10;
  document.getElementById("6p").textContent = (p6+p7+p8+p9)/10;
  document.getElementById("5p").textContent = (p10+p11+p12+p13)/10;
  document.getElementById("4p").textContent = (p14+p15+p16+p17)/10;
  document.getElementById("3p").textContent = (p18+p19+p20+p21)/10;

  document.getElementById("7p2").textContent = (p26+p27+p28+p29+p1+p2+p3+p4+p5)/25;
  document.getElementById("6p2").textContent = (p6+p7+p8+p9)/25;
  document.getElementById("5p2").textContent = (p10+p11+p12+p13)/25;
  document.getElementById("4p2").textContent = (p14+p15+p16+p17)/25;
  document.getElementById("3p2").textContent = (p18+p19+p20+p21)/25;
  document.getElementById("2p2").textContent = (p22+p23+p24+p25)/25;

}









  document.getElementById("s1b1").onclick = function(){
  avg = Number(document.getElementById("input1").value);
  document.getElementById("7f").textContent = Math.round((avg * .2)/70);
  document.getElementById("6f").textContent = Math.round((avg * .2)/60);
  document.getElementById("5f").textContent = Math.round((avg* .2)/50);
  document.getElementById("4f").textContent = Math.round((avg * .2)/40);
  document.getElementById("3f").textContent = Math.round((avg * .2)/30);
  
  }

  document.getElementById("s1b2").onclick = function(){
    avg = Number(document.getElementById("input2").value);
    document.getElementById("7f2").textContent = Math.round((avg * .15)/175);
    document.getElementById("6f2").textContent = Math.round((avg * .15)/150);
    document.getElementById("5f2").textContent = Math.round((avg* .15)/125);
    document.getElementById("4f2").textContent = Math.round((avg * .2)/100);
    document.getElementById("3f2").textContent = Math.round((avg * .2)/75);
    document.getElementById("2f2").textContent = Math.round((avg * .15)/50);
    }

         
let piece10 = "flase";
document.getElementById("10p").onclick = function(){
  
  if(piece10 === "flase"){
  document.getElementById("divfor10p").style.zIndex = 1;
  piece10 = "true";
  }
  else{
    document.getElementById("divfor10p").style.zIndex = -1;
    piece10 = "flase";
  }
};

document.getElementById("end").onclick = function(){
  document.getElementById("inputzr").style.zIndex = 1;
}

let piece25 = "flase";
document.getElementById("25p").onclick = function(){
  
  if(piece25 === "flase"){
  document.getElementById("divfor25p").style.zIndex = 2;
  piece25 = "true";
  }
  else{
    document.getElementById("divfor25p").style.zIndex = -2;
    piece25 = "flase";
  }
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