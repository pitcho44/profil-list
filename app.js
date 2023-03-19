let titel=document.querySelector('#titel');
let conten=document.querySelector('#conten');
let button=document.querySelector('button')
let img=document.querySelector('.image')
let Person=document.querySelector(".bi-person-fill")
let envelope=document.querySelector(".bi-envelope-paper-fill")
let calendar=document.querySelector(".bi-calendar-plus-fill")
let map=document.querySelector(".bi-map-fill")
let telephone=document.querySelector(".bi-telephone-fill")
let fileLock=document.querySelector(".bi-file-lock-fill")

fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {
        img.innerHTML=`<img src='${json.results[0].picture.large}' />`
        Person.addEventListener('mouseover',()=>{
            titel.innerText='name';
            conten.innerText=`${json.results[0].name.first} ${json.results[0].name.last} `
        });
        envelope.addEventListener('mouseover',()=>{
            titel.innerText='email';
            conten.innerText=`${json.results[0].email}`
        });
        calendar.addEventListener('mouseover',()=>{
            titel.innerText='calendar';
            conten.innerText=`${json.results[0].dob.date}`
        });
        map.addEventListener('mouseover',()=>{
            titel.innerText='map';
            conten.innerText=`${json.results[0].location.country} ${json.results[0].location.city}  `
        });
        telephone.addEventListener('mouseover',()=>{
            titel.innerText='telephone';
            conten.innerText=`${json.results[0].phone}`
        });
        fileLock.addEventListener('mouseover',()=>{
            titel.innerText='password';
            conten.innerText=`${json.results[0].login.password}`
        });

      })

      button.addEventListener('click',()=>{
        window.location.reload()
      })


