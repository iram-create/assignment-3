



    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response)=>{
      return response.json();}).then((objectData)=>{
        console.log(objectData)
        let tableData="";
        objectData.forEach(element => {
          tableData+=`<tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.email}</td>
          <td>${element.body}</td></tr>`;
          
       } );
       document.getElementById("table_body").
       innerHTML=tableData;
      }
       
      
     ) 
     
      
     
     
      