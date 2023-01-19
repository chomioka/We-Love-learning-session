
var password="welcome!";
var username1="Haruki Ohta";
var username2="Yuzuki Komoto";
var username3="Yuto Sadohara";
var username4="Shiyu Sano";
var username5="Haruto Shiraishi";
var username6="Riku Tanaka";
var username7="Eiki Chiba";
var username8="Tenzing Deguchi";
var username9="Hitoshi Terai";
var username10="Ryona Natsuki";
var username11="Rikuto Nishihara";
var username12="Ayuri Maeda";
var username13="Ryoya Mizusawa";
var username14="Ichiryu Murakami";
var username15="Takuho Yaoi";
var username16="Aki Yamamoto";
var username17="Yokota Shuya";

var p=0;
var n=0;
  function passcheck(){



if(document.getElementById('pass1').value == password){
    p = 1;
    }
if(document.getElementById('pass1').value != password){
    p = 0;
    }

if(document.getElementById('name1').value == username1){
  n = 1;
}
if(document.getElementById('name1').value == username2){
  n = 1;
}
if(document.getElementById('name1').value == username3){
  n = 1;
} 
if(document.getElementById('name1').value == username4){
  n = 1;
} 
if(document.getElementById('name1').value == username5){
  n = 1;
} 
if(document.getElementById('name1').value == username6){
  n = 1;
}     
if(document.getElementById('name1').value == username7){
  n = 1;
} 
if(document.getElementById('name1').value == username8){
  n = 1;
} 
if(document.getElementById('name1').value == username9){
  n = 1;
} 
if(document.getElementById('name1').value == username10){
  n = 1;
} 
if(document.getElementById('name1').value == username11){
  n = 1;
}     
if(document.getElementById('name1').value == username12){
  n = 1;
} 
if(document.getElementById('name1').value == username13){
  n = 1;
} 
if(document.getElementById('name1').value == username14){
  n = 1;
} 
if(document.getElementById('name1').value == username15){
  n = 1;
} 
if(document.getElementById('name1').value == username16){
  n = 1;
} 
if(document.getElementById('name1').value == username17){
  n = 1;
}     
     
if(p+n==2){
  alert('Push "OK" to enter');
  return true;
}
if(p+n!=2){
  alert('Wrong password or name');
  return false;
}
  }

