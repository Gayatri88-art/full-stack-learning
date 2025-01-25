let arr = [1,2,3,4,5];
 arr.forEach(element => {
  console.log(element);
 });
 arr.forEach(function(el){
  console.log(el);
 });

 let arr2 = [
          {
            name:"gayatri",
            gender:"female",
            marks:90
          },
            {
              name:"mayuri",
            gender:"female",
            marks:93
          },
            {
              name:"sanika",
            gender:"female",
            marks:98
          }
          ];
         arr2.forEach((student)=>{
          console.log(student.marks);
         })
 