var container = document.querySelector('.container');

(function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      container.innerHTML = `
      <img src="${response.results[0].picture.large}" class="profile"></img><br/>
      <label>Name:</lable>
      <span>${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}</span> 
      <br/>  
      <label>Gender:</lable> 
      <span>${response.results[0].gender}</span>
      <br/>
      <label>Cell:</lable> 
      <span>${response.results[0].cell}</span> 
      <br/>

      <label>Phone:</lable> 
      <span>${response.results[0].phone}</span>
      <br/>
      <label>Address:</lable>
      <span>${response.results[0].location.street.name} ${response.results[0].location.street.number} 
      ${response.results[0].location.state} ${response.results[0].location.city}  ${response.results[0].location.country} 
       ${response.results[0].location.postcode}</span>
      <br/>

      `;
      // console.log(`response ${response}`);
      // console.log('response' + ' ' + response);
    }
  };

  xhttp.open('GET', 'https://randomuser.me/api/', true);
  xhttp.send();
})();
