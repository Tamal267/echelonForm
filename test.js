let n,nv,nM1;
let val,arr=[[]];

function sendkey(){
  //document.getElementById("fname").value;
  document.getElementById("resultBox").innerHTML="";
  let i=0,j=0,text=document.getElementById("fname").value;
  let values=text.split("\n");


  //values = values.split("\n");

  while(values[i] != undefined){
    val=values[i].split(" ");
    nv=val.length;
    //console.log("val:"++"\n");
    arr[i]=val.map(Number);
    i++;
  }
  n=i;
  console.log(arr);
  nM1=n-1;
  find();
}



function find(){
  let pos=0,count=0,a,b,c,d,ei,ej,cha="-",aster,temp,inter=((n-1)*n)/2;
  while(count < inter){
    count=0;
    document.getElementById("resultBox").innerHTML+=("<br><br>~<br>");
    for(ei=0;ei<n;ei++){
      c=arr[pos][pos];
      a=Math.abs(c);
      d=arr[ei][pos];
      b=Math.abs(d);
      aster="'";
      aster=aster.repeat(pos);
      if(a == 0){
        for(let p=pos+1;p<n;p++){
          if(arr[p][pos]){
            temp=arr[pos];
            arr[pos] = arr[p];
            arr[p] = temp;
            temp=a;
            a=b;
            b=temp;
            document.getElementById("resultBox").innerHTML+=(`<span style="color:rgb(53, 52, 52);font-family:monospace;"> By interchanging L${aster}<sub>${pos+1}</sub> & L${aster}<sub>${p+1}</sub></span><br>`);
            p=n;
          }
        }
      }
        
      for(ej=0;ej<nv;ej++){
        if(ei<=pos) {
          if(ej== nv-1) document.getElementById("resultBox").innerHTML+=(`= ${arr[ei][ej]} `);
          else{
            if(ej>0 && arr[ei][ej]>=0) document.getElementById("resultBox").innerHTML+=("+");
            document.getElementById("resultBox").innerHTML+=(`${arr[ei][ej]}x<sub>${ej+1}</sub> `);
          }
        }
        else {
          if(((a * d) - (b * c)) == 0 ){
            arr[ei][ej] = (a * arr[ei][ej]) - (b * arr[pos][ej]);
            if(ej== nv-1) document.getElementById("resultBox").innerHTML+=(`= ${arr[ei][ej]}   <span class="process">[L${aster}'<sub>${ei+1}</sub> = ${a}L${aster}<sub>${ei+1}</sub> ${cha} ${b}L${aster}<sub>${pos+1}</sub>]</span>`);
            else{
              if(ej>0 && arr[ei][ej]>=0) document.getElementById("resultBox").innerHTML+=("+");
              document.getElementById("resultBox").innerHTML+=(`${arr[ei][ej]}x<sub>${ej+1}</sub> `);
            }
            cha = "-";
          }
          else{
            arr[ei][ej] = (a * arr[ei][ej]) + (b * arr[pos][ej]);
            if(ej== nv-1) document.getElementById("resultBox").innerHTML+=(`= ${arr[ei][ej]}   <span class="process">[L${aster}'<sub>${ei+1}</sub> = ${a}L${aster}<sub>${ei+1}</sub> ${cha} ${b}L${aster}<sub>${pos+1}</sub>]</span>`);

            else {
              if(ej>0 && arr[ei][ej]>=0) document.getElementById("resultBox").innerHTML+=("+");
              document.getElementById("resultBox").innerHTML+=(`${arr[ei][ej]}x<sub>${ej+1}</sub> `);
            }
            cha = "+";
          }
        }
        if(ej<ei){
          if(arr[ei][ej] == 0) count++;
        }
      }
      document.getElementById("resultBox").innerHTML+=("<br>");
    }
    pos++;
  }
}
