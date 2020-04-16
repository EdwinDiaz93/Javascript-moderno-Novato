document.querySelector('#button1').addEventListener('click',getText);
document.querySelector('#button2').addEventListener('click',getPost);
document.querySelector('#button3').addEventListener('click',getExternal);

function getText(){
    fetch('7-Test.txt')
    .then(function(res){
        /*El primer then recibe como parametro una funcion con una respuesta que tiene
        un gran conjunto de metodos los mas usados son json y text 
        estos metodos retornan una promise
        */
        return res.text();        
    })
    .then(function(data){
        /*El segundo then recibe como parametro una function los datos obtenidos 
        del promise del primer then retorna los datos
        */
        // console.log(data);    
        document.querySelector('#output').innerHTML=data;
    }).catch(function(error){
        console.log(error)
    });

}
function getPost(){
    fetch('7-posts.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){        
       let output='';
       data.forEach( function(post){
           output+=` <li>${post.title}</li>`;
       });
       document.querySelector('#output').innerHTML=output;
    });
}

function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let output='';
        data.forEach(function(user){
            output+=`
            <li>${user.login}</li>            
            `;
        });
        document.querySelector('#output').innerHTML=output;
    });
}