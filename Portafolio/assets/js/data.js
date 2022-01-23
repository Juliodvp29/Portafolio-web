const btn_contact = document.getElementById('btn_contact');
const form = document.getElementById('form');
btn_contact.addEventListener('click', (e) => {
    e.preventDefault();
    
   let xhr = new XMLHttpRequest();

   xhr.open('POST', '../server/data.php', true);
   xhr.onload = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){    
      
        //esperar 2seg y limpiar el formulario

        setTimeout(() => {
            form.reset();
        } , 2000);
       
        
       
        }else{
            // error
           console.log("error");
        }
    }
   }

    
   let formData = new FormData(form);
   xhr.send(formData); // send the request

});