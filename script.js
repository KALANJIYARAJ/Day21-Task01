let searchdiv=document.createElement("div");
searchdiv.setAttribute("class","searchdiv");

let searchbox=document.createElement("lable");
searchbox.setAttribute("class","searchbox");
searchbox.setAttribute("for","myInput");
searchbox.innerHTML=`<i class="fa fa-search" aria-hidden="true"></i>`

let search=document.createElement("input");
search.setAttribute("type","text");
search.setAttribute("id","myInput");
search.setAttribute("maxlength","4");
search.addEventListener("keyup",foo);
search.setAttribute("placeholder","Enter Number Between 1-1330");
search.setAttribute("title","type in a name");
search.setAttribute("year","2022");

var container=document.createElement("div");
    container.setAttribute("class","container");

    var row=document.createElement("div");
    row.setAttribute("class","row");


   

container.append(row);  
searchbox.append(search);
searchdiv.append(searchbox);
document.body.append(searchdiv,container);


async function foo(){
    try{
    let num=document.getElementById("myInput").value;
    num=+num;
    console.log(num);
    let url=`https://api-thirukkural.vercel.app/api?num=${num}`;
    let res = await fetch(url);
    let res1=await res.json();
    console.log(res1);
  

    
    row.innerHTML=`<div class="card text-white bg-warning mb-3">
    <h2 class="card-header" style="color:whide">Tamil</h2>
    <div class="card-body">
      <h3>${res1.sect_tam}:</h3><br>
      <div class="kural">
        <h5 class="card-title">${res1.line1}</h5>
        <h5 class="card-title">${res1.line2}</p><h5>
        </div>
        <p class="card-text">Tamil Expalanation:  ${res1.tam_exp}.</p>
      
    </div>
  </div>

  <div class="card text-white bg-warning mb-3">
  <h2 class="card-header" style="color:whide">English</h2>
  <div class="card-body">
     <div class="kural">
       <h3>${res1.sect_eng}:</h3><br>
       <h5 class="card-title">${res1.eng}.</h5><br>
       </div>
       <p class="card-text">English Expalanation:  ${res1.eng_exp}.</p>
    </div>
  </div>`;
}
catch(error){
    console.log(error);
}

}
