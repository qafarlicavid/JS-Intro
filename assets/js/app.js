
var date = new Date();
var vaxt = date.getHours();
var fulltime = date.getHours() + ":" + date.getMinutes();

if(vaxt>6 && vaxt<12){
    alert("Saat :" + fulltime + "\n" + "Gm");
}
else if(vaxt>=12 && vaxt<18){
    alert("Saat :" + fulltime + "\n" + "Gunorta");
}
else if(vaxt>=18 && vaxt<24){
    alert("Saat :" + fulltime + "\n" + "Gn");
}
else if(vaxt>=0 && vaxt<6){
    alert("Saat :" + fulltime + "\n" + "Geceyarsi");
}