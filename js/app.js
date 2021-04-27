'use strict'
function random (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  let mobiles=[]
  let tableHead=['user',"type",'price',"condition"]
  
  function Mobile(user,type){
      this.user=user,
      this.type=type,
      this.price=random(100,500)
      mobiles.push(this)
  }
   let tableDiv=document.getElementById('table')
   let table=document.createElement('table')
  tableDiv.appendChild(table);
  let TrHead=document.createElement('tr')
  table.appendChild(TrHead)
  for(let i=0;i<tableHead.length;i++){
      let ThHead=document.createElement('th')
      TrHead.appendChild(ThHead)
      ThHead.textContent=tableHead[i];
  }

  Mobile.prototype.render=function(){
      let trData=document.createElement('tr')
      table.appendChild(trData)

      let tdUser=document.createElement('td')
      trData.appendChild(tdUser)
      tdUser.textContent=this.user

      let tdType=document.createElement('td')
      trData.appendChild(tdType)
      tdType.textContent=this.type

      let tdPrice=document.createElement('td')
      trData.appendChild(tdPrice)
      tdPrice.textContent=this.price

      if(tdPrice<200)
      { 
        let tdcon1=document.createElement('td')
        trData.appendChild(tdcon1)
        tdcon1.textContent='used'


      }
      else {

        let tdcon2=document.createElement('td')
        trData.appendChild(tdcon2)
        tdcon2.textContent='new'

      }


      


      
  }

//form 
let form=document.getElementById('form')
form.addEventListener('submit',info)
function info (event){
    event.preventDefault();
    console.log(event);

    let user=event.target.user.value
    console.log(user);
    let type=event.target.type.value
    console.log(type);

    let newMobile=new Mobile(user,type)
    newMobile.render();
    setData();

}

function setData(){
    let stringMobile=JSON.stringify(mobiles)
    localStorage.setItem('mobiles',stringMobile)
}
function getData(){
  let getinfo =localStorage.getItem('mobiles')
  let normalData=JSON.parse(getinfo)
  if(normalData){
      for(let i=0;i<normalData.length;i++){
          let newObg=new Mobile(normalData[i].user,normalData[i].type)


      }
  }


}
getData()
for(let i=0;i<mobiles.length;i++){
    mobiles[i].render();
}