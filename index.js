function openNav() {
    document.getElementById("mySidepanel1").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidepanel1").style.width = "0";
}

function openNav1(){
    document.getElementById("mySidepanel2").style.width = "345px";
    document.getElementById("cls-btn-2").style.width= "300px";
}

function closeNav1(){
    document.getElementById("mySidepanel2").style.width = "0px";
    
    document.getElementById("cls-btn-2").style.width= "0px";
    
}


var coll=document.getElementsByClassName("collap-block-1");

for(let i=0; i< coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content= this.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display="none";                            
            document.getElementById("card").style.height="0px";
        }
        else{
            content.style.display="block";              
            document.getElementById("card").style.height="520px";
        }
    });
}


var coll1=document.getElementsByClassName("collap-block-2");

for(let i=0; i< coll1.length; i++){
    coll1[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content= this.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display="none";                            
            document.getElementById("card1").style.height="0px";
        }
        else{
            content.style.display="block";              
            document.getElementById("card1").style.height="520px";
        }
    });
}


function closeThread( ID){
    var ele= document.getElementById(ID);
    if(ele.style.display==="block"){
        ele.style.display="none";
    }
    else{
        ele.style.display="block";
    }
}
// Fetching data from json file

fetch("data.json")
.then(function(response) {
  return response.json();
})
.then(function (data) {

   document.getElementById("Task_title").innerHTML= `${data.task_title}`;
   document.getElementById("Task_description").innerHTML= `${data.task_description}`;

   var asset_data= data.assets;
   for(let i = 0 ; i <asset_data.length; i++){
    var Id= "asset-Title-"+ (i+1).toString();
    document.getElementById(Id).innerHTML= `${asset_data[i].asset_title}`;

    var ID= "asset-Description-"+ (i+1).toString();
    document.getElementById(ID).innerHTML= `${asset_data[i].asset_description}`;
   }

   var YouTube= document.getElementById("you-tube");
   YouTube.src= asset_data[0].asset_content;

  });
