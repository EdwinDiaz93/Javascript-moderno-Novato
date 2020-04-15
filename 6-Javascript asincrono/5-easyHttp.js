function easyHttp(){
    this.http=new XMLHttpRequest();
}

easyHttp.prototype.get=function(url,callback){
    this.http.open('GET',url,true);

    this.http.onload=()=>{
        /*
        en este caso this esta definido dentro de la funcion onload pero no dentro del if
        por eso hay que reasignar this dentro de otra variable para que este disponible 
        en el if esto era la solucion en ES5 ahora en ES6 se usa arrow functions
        */
       let self=this;
        if(self.http.status===200){
            callback(null,self.http.responseText);
        }else{
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}

easyHttp.prototype.post=function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader("Content-Type", "application/json");
    let self=this;
    this.http.onload=function(){
        callback(self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.put=function(url,data,callback){      
    this.http.open('PUT',url,true);
    this.http.setRequestHeader("Content-type", "application/json");    
        
    let self=this;

    this.http.onload=function(){
        callback(self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.delete=function(url,callback){
    this.http.open('DELETE',url,true);

    this.http.onload=()=>{        
       let self=this;
        if(self.http.status===200){
            callback(null,'Post Borrado');
        }else{
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}
