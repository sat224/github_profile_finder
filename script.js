var input=document.getElementById('search_input')


input.addEventListener('keypress',function(event){
  if(event.key==='Enter'){
    event.preventDefault();
    document.getElementById('icon1').click();
  }
})


function myFunction() {
  var search=document.getElementById('search_input').value
   var newSearch=search.split(' ').join('')
  //  var Search2=search+'k'
  //  var Search3=search+'s'
  //  var Search5=search+'t'
  //  var Search6=search+'h'



   
   fetch("https://api.github.com/users/"+newSearch)
   .then((result)=>result.json())
   .then((data)=>{
    console.log(data)
    if(newSearch=='')alert('please enter username');
    else if(data.login==undefined)document.getElementById('res').innerHTML='No results found!'
    else{
       let Username=data.name;
      //  console.log(Username)
      
       if(Username===null) Username=data.login;
      //  console.log(Username)

      document.getElementById('res').innerHTML=`<img src="${data.avatar_url}" alt=""/> <br>
      <div id="details">
      <p>username : ${Username}</p> 
      <br>
      <p>Followers : ${data.followers}</p>
      <br>
      <p>Following : ${data.following}</p>
      <br> 
      <a href="https://github.com/${data.login}">Go to Github</a>
      </div>`
      
    }
   
  })

//   fetch("https://api.github.com/users/"+Search2)
//   .then((result)=>result.json())
//   .then((data)=>{
//    console.log(data)
//    if(Search2=='')alert('please enter username');
//    else if(data.login==undefined)document.getElementById('res2').innerHTML='No results found!'
//    else{
//       let Username=data.name;
//      //  console.log(Username)
     
//       if(Username===null) Username=data.login;
//      //  console.log(Username)

//      document.getElementById('res2').innerHTML=`<img src="${data.avatar_url}" alt=""/> <br>
//      <div id="details">
//      <p>username : ${Username}</p> 
//      <br>
//      <p>Followers : ${data.followers}</p>
//      <br>
//      <p>Following : ${data.following}</p>
//      <br> 
//      <a href="https://github.com/${data.login}">Go to Github</a>
//      </div>`
     
//    }
  
//  })

//  fetch("https://api.github.com/users/"+Search3)
//   .then((result)=>result.json())
//   .then((data)=>{
//    console.log(data)
//    if(Search3=='')alert('please enter username');
//    else if(data.login==undefined)document.getElementById('res3').innerHTML='No results found!'
//    else{
//       let Username=data.name;
//      //  console.log(Username)
     
//       if(Username===null) Username=data.login;
//      //  console.log(Username)

//      document.getElementById('res3').innerHTML=`<img src="${data.avatar_url}" alt=""/> <br>
//      <div id="details">
//      <p>username : ${Username}</p> 
//      <br>
//      <p>Followers : ${data.followers}</p>
//      <br>
//      <p>Following : ${data.following}</p>
//      <br> 
//      <a href="https://github.com/${data.login}">Go to Github</a>
//      </div>`
     
//    }
  
//  })

//  fetch("https://api.github.com/users/"+Search4)
//   .then((result)=>result.json())
//   .then((data)=>{
//    console.log(data)
//    if(Search4=='')alert('please enter username');
//    else if(data.login==undefined)document.getElementById('res4').innerHTML='No results found!'
//    else{
//       let Username=data.name;
//      //  console.log(Username)
     
//       if(Username===null) Username=data.login;
//      //  console.log(Username)

//      document.getElementById('res4').innerHTML=`<img src="${data.avatar_url}" alt=""/> <br>
//      <div id="details">
//      <p>username : ${Username}</p> 
//      <br>
//      <p>Followers : ${data.followers}</p>
//      <br>
//      <p>Following : ${data.following}</p>
//      <br> 
//      <a href="https://github.com/${data.login}">Go to Github</a>
//      </div>`
     
//    }
  
//  })

//  fetch("https://api.github.com/users/"+Search5)
//   .then((result)=>result.json())
//   .then((data)=>{
//    console.log(data)
//    if(Search5=='')alert('please enter username');
//    else if(data.login==undefined)document.getElementById('res5').innerHTML='No results found!'
//    else{
//       let Username=data.name;
//      //  console.log(Username)
     
//       if(Username===null) Username=data.login;
//      //  console.log(Username)

//      document.getElementById('res5').innerHTML=`<img src="${data.avatar_url}" alt=""/> <br>
//      <div id="details">
//      <p>username : ${Username}</p> 
//      <br>
//      <p>Followers : ${data.followers}</p>
//      <br>
//      <p>Following : ${data.following}</p>
//      <br> 
//      <a href="https://github.com/${data.login}">Go to Github</a>
//      </div>`
     
//    }
  
//  })

 

}