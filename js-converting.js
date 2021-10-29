function convert(n,x,y,z,a,b,c){
    let counter=0,x1,y1,z1;
    for (x1=0;x1<=10;x1++)
        for (y1=0;y1<=10;y1++)
            for (z1=0;z1<=10;z1++){
                if (x1*a+y1*b+z1*c === n) counter++;
            }
    return counter;

}
console.log(convert(32000,2,1,1,4200,7500,3600));