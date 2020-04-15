const http=new easyHttp();

//GET posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(error,response){
//     if(error){
//         console.log(error);
        
//     }else{
//     console.log(response);    
//     }
// });

// // GET post1
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(error,response){
//     if(error){
//         console.log(error);
        
//     }else{
//     console.log(response);    
//     }
// });

//POST post

// crear la data
const data={
    title:'Custom post',
    body:'this is a custom post',    
}

// Crear Post 
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//     if(err){
//         console.log(err);        
//     }else{
//     console.log(post);    
//     }
// });

//Actualizar post

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//         if(err){
//             console.log(err);        
//         }else{
//             console.log(post);    
//         }
// });

//Borrar Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error,response){
    if(error){
        console.log(error);        
    }else{
    console.log(response);    
    }
});