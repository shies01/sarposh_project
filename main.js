let form = document.querySelector("form");
let name = document.getElementById("name");
let  pax = document.getElementById("pax");
let time = document.getElementById("time");
let date = document.getElementById("date");
let mobileNum = document.getElementById("number");
let table = document.getElementById("table");
let tbody = document.querySelector("tbody");
let allData = [];
form.addEventListener("submit", function(e){
    e.preventDefault();
    let data = {
      Cname : name.value,
      Cpax : pax.value,
      Ctime :time.value,
      Cdate : date.value,
      CMnum : mobileNum.value,
      Ctable : table.value,
    }
    allData.push(data)
    tbody.innerHTML = "";
    allData.map((ele)=>{
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let td10 = document.createElement("td");

        td1.innerText = ele.Cdate;
        td2.innerText = ele.Ctime;
        td3.innerText = ele.Cname;
        td4.innerText = ele.Cpax;
        td5.innerText = ele.CMnum;
        td6.innerText = ele.Ctable;
        trow.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10)
        tbody.append(trow);

        let status = document.createElement("h3")
        td7.append(status)
         
        let arrive = document.createElement("button");
        arrive.style.border = "none";
        arrive.style.cursor = "pointer"
        arrive.innerText = "ARRIVED";
        td8.append(arrive)
        arrive.addEventListener("click",function(e){
            td7.innerText = "ARRIVED"
            td7.style.background = "green"
            td9.innerHTML = "";
            td8.innerHTML = "";
        })
        let cancel = document.createElement("button");
        cancel.style.border = "none";
        cancel.style.cursor = "pointer"
        cancel.innerText = "CANCELLED";
        td9.append(cancel)
        cancel.addEventListener("click",function(e){
            td7.innerText = "CANCELLED"
            td7.style.background = "red"
            td8.innerHTML = "";
            td9.innerHTML = "";
        })

        let del = document.createElement("button");
        del.style.border = "none";
        del.style.cursor = "pointer";
        del.style.backgroundColor = "red"
        del.innerText = "DELETE";
        td10.append(del)
        // del.addEventListener("click", function(e){
        //     trow.innerHTML = "";
        // })
        // ... (Your existing code)

       del.addEventListener("click", function(e) {
    let index = allData.indexOf(ele);
    allData.splice(index, 1);
    trow.remove();
});

// ... (Your existing code)

        td10.style.backgroundColor = "red"

      
    })

})
