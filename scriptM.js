function search_brand() {
  //alert('welcome');

  var a=document.getElementById('searchbar').value;
  a=a.toLowerCase();
  //alert(a)

  let x = document.getElementsByClassName('searchM');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(a)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
    
}


function chatter()
{
    document.getElementById('chatbox').value=''
    document.getElementById('chatbox').style.color='white'
}

function sendChat()
{
    var f=document.getElementById('chatbox').value;
    const para = document.createElement("p");
    para.innerHTML = f;
    para.style.fontSize="1em";
    para.style.width="110%"
    para.style.height="50pt";
    para.style.padding="10pt";
    para.style.borderRadius="10pt"
    para.style.position='relative';
    para.style.position.left="0%";
    para.style.marginBottom="20pt"

    // Append to another element:
    document.getElementById("three").display='block';
    document.getElementById("three").appendChild(para);
}