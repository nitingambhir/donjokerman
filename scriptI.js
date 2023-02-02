var un;
var pw;
var ot;
var book;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function encryption()
  {
    un=document.getElementById("un").value;
    pw=document.getElementById("ps").value;
    //alert(un);
    //alert(pw);
    ot="";
    book="abcdefghijklmnopqrstuvwxyz";
    
    for(var i=0;i<un.length;i++)
    {
      for(var j=0;j<book.length;j++)
      {
        if(un[i].toLowerCase()===book[j]){ot=ot+book[(j+3)%26];}
      }
    }
    //alert(ot);
    if(ot===pw.toLowerCase()){
    window.location.assign("main.html");}
    else{location.reload();}
  }