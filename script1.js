const sub1=['A']
const sub9=['A']
const sub6=['A']
const sub8=['A']
const sub4=['A']
const sub2=['A']
const sub3=['A']
const sub5=['A']
const sub7=['A']
const stdname=["user"]
//Access element from storage
const registerno=sessionStorage.getItem("Name");
const position=sessionStorage.getItem("index");
//display student details
const aadharno=document.getElementById("stdregno");
aadharno.innerHTML=registerno;
const name=document.getElementById("name");
name.innerHTML=stdname[position];
//display result for sub1
document.getElementById("sub1").innerHTML=sub1[position];
if(sub1[position]!="F"){
    document.getElementById("c0").innerHTML="Pass";
}
else{
    document.getElementById("c0").innerHTML="RA";
}
//display result for sub2
document.getElementById("sub9").innerHTML=sub9[position];
if(sub9[position]!="F"){
    document.getElementById("c1").innerHTML="Pass";
}
else{
    document.getElementById("c1").innerHTML="RA";
}
//display result for sub3
document.getElementById("sub6").innerHTML=sub6[position];
if(sub6[position]!="F"){
    document.getElementById("c2").innerHTML="Pass";
}
else{
    document.getElementById("c2").innerHTML="RA";
}
//display result for sub4
document.getElementById("sub7").innerHTML=sub7[position];
if(sub7[position]!="F"){
    document.getElementById("c3").innerHTML="Pass";
}
else{
    document.getElementById("c3").innerHTML="RA";
}
//display result for sub5
document.getElementById("sub3").innerHTML=sub3[position];
if(sub3[position]!="F"){
    document.getElementById("c4").innerHTML="Pass";
}
else{
    document.getElementById("c4").innerHTML="RA";
}
//display result for sub6
document.getElementById("sub5").innerHTML=sub5[position];
if(sub5[position]!="F"){
    document.getElementById("c5").innerHTML="Pass";
}
else{
    document.getElementById("c5").innerHTML="RA";
}
//display result for sub7
document.getElementById("sub8").innerHTML=sub8[position];
if(sub8[position]!="F"){
    document.getElementById("c6").innerHTML="Pass";
}
else{
    document.getElementById("c6").innerHTML="RA";
}
//display result for sub8
document.getElementById("sub4").innerHTML=sub4[position];
if(sub4[position]!="F"){
    document.getElementById("c7").innerHTML="Pass";
}
else{
    document.getElementById("c7").innerHTML="RA";
}
//display result for sub9
document.getElementById("sub2").innerHTML=sub2[position];
if(sub2[position]!="F"){
    document.getElementById("c8").innerHTML="Pass";
}
else{
    document.getElementById("c8").innerHTML="RA";
}