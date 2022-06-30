function fullstack(num){
  const arr=[]
    for(let i = 1; i <= num; i++){
      let hasil="";
      
       if ((i % 3) === 0){
          hasil += "FrontEnd";
         }
        if ((i % 5) === 0){  
          hasil += "BackEnd";
          }
        if (hasil !== ''){
          arr.push(hasil);
          }
        else{    
        arr.push(i);}
      }
      return arr;
    }
    console.log(fullstack(50));