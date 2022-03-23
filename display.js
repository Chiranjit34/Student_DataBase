var sArr = JSON.parse(localStorage.getItem('sData1'))||[];

sArr.map(function(elem,index){

    //console.log(elem)
    var tr = document.createElement('tr')

    var col1 = document.createElement('td')
    col1.innerText=elem.name;

    var col2 = document.createElement('td')
    col2.innerText=elem.phone;

    var col3 = document.createElement('td')
    col3.innerText=elem.city;

    tr.append(col1,col2,col3)

    document.querySelector('#sContent').append(tr)
    
})