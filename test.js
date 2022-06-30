function Fazztrack(num){
    for(let i = 1; i <= num; i++){
      let hasil="";
      
       if ((i % 3) === 0){
          hasil += "FrontEnd";
         }
        if ((i % 5) === 0){  
          hasil += "BackEnd";
          }
        if (hasil !== ''){
          console.log(hasil);
          }
        else{    
        console.log(i);}
      }
    }
    Fazztrack(50);