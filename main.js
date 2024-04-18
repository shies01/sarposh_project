let form = document.querySelector("#cant > form");
let personName = document.getElementById("name");
let paxNum = document.getElementById("pax");
let expDate = document.getElementById("date");
let expTime = document.getElementById("time");
let mobileNum = document.getElementById("number");
let tableNum = document.getElementById("table")
let tbodyContainer = document.querySelector('tbody')
form.addEventListener("submit", function(){
handlesubmit()
})
let AllData = []
function handlesubmit(){
    let data = {
      name : personName.value,
      pax : paxNum.value,
      date : expDate.value,
      time : expTime.value,
      mobileNumber : mobileNum.value,
      tableNumber : tableNum.value,
    }
AllData.push(data)
saveData()
}
function saveData(){
    localStorage.setItem("data", JSON.stringify(AllData))
}
function getData(){
    let value = JSON.parse(localStorage.getItem("data"))
    if(value){
        AllData = value
        showData(AllData)
    }
    
}
function showData(arr){
    tbodyContainer.innerHTML=""
  arr.forEach(function(ele,i){
    let  tr = document.createElement("tr");
    let td1 = document.createElement("td")
    td1.innerHTML = ele.date;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.time;
    let td3 = document.createElement("td")
    td3.innerHTML = ele.name;
    let td4 = document.createElement("td")
    td4.innerHTML = ele.pax;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.mobileNumber;
    let td6 = document.createElement("td")
    td6.innerHTML = ele.tableNumber;
    let td7 = document.createElement("td")
    let yes = document.createElement("button")
    yes.className = "yes_btn"
    yes.addEventListener("click", function(){
        td7.innerHTML = "Arrived"
    })
    yes.innerHTML = "Yes"
    let no = document.createElement("button")
    no.innerHTML = "No"
    no.addEventListener("click", function(){
        td7.innerHTML = "hasn't come"
    })
    no.className= "no_btn"
    td7.append(yes,no)
    let td8 = document.createElement("td")
    let dlt = document.createElement("button")
    dlt.innerHTML = "Delete";
    dlt.className = "dlt"
    dlt.addEventListener("click", function(){
        handleDelete(i)
    })
    td8.append(dlt)
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    tbodyContainer.append(tr)
  })

}

function handleDelete (index){
    AllData.splice(index,1)
        showData(AllData)
        saveData()
    
}












getData()
