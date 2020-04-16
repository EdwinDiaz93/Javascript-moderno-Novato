document.querySelector('.obtenerBromas').addEventListener('click',obtenerBromas);


function obtenerBromas(e){
    e.preventDefault();
    const numero=document.querySelector('#numero').value;
    
    //instanciando objeto xhr 
    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${numero}`,true);

    xhr.onload=function(){
        if(this.status===200){
            const response=JSON.parse(this.responseText);
            let output='';

            if(response.type==='success'){
                response.value.forEach(function(broma) {
                    output+=`<li>${broma.joke}</li>`;
                });
            }else{
                output+=`
                <li>Error algo salio mal</li>
                `;
            }
            document.querySelector('.bromas').innerHTML=output;    
        }
        
    }

    xhr.send();
}