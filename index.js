document.querySelector("#form").addEventListener('submit',student)

var sArr = JSON.parse(localStorage.getItem('sData1'))||[];



function student(event){
    event.preventDefault()

    var name = document.querySelector("#name").value;

    var phone = document.querySelector("#phone").value;

    var city = document.querySelector("#city").value;

    function person(name,phone,city){
    
            this.name = name;
            this.phone = phone;
            this.city  = city;
        
    }
    const sData = new person(name,phone,city)
    //console.log(sData)
    sArr.push(sData)

    localStorage.setItem('sData1',JSON.stringify(sArr))
    
}

