function isItTrue(n,a,b,sum){
    let counter=0;
   if (sum.length !== n){
       return "wrong input"
   }
   for (let i=0;i<sum.length;i++){
       if (i<n/2){
           if (sum[i]<=45+a) counter++;
       }
       else{
           if (sum[i]<=90+b) counter++;
       }
   }
   if (!counter ===n) return "NO";
    else return "YES";
}
console.log(isItTrue(6,3,2,[8,48,45,70,81,94]));