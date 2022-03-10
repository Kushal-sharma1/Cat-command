const fs  = require("fs");
//took input from terminal
let input = process.argv.slice(2);
// console.log(input);

let filepath =[];
let option=[];

for(let i=0;i<input.length;i++){
    if(input[i].charAt(0)=='-'){
        option.push(input[i]);
    }else{
        filepath.push(input[i]);
    }  
}
console.log(option);
//checking file exist or not

for(let i=0;i<filepath.length ;i++){
    let exist =fs.existsSync(filepath[i]);
    if(!exist){
        console.log(filepath[i] +" File not exit");
        return ;
    }
}

//taking content from file
let content="";
for(let i=0;i<filepath.length;i++){
    let temp = fs.readFileSync(filepath[i]);
    content+=temp+"\r\n";
}

let contentarr= content.split("\r\n");
console.table(contentarr);
//now i am executing  option
//option -s
if(option.includes("-s")){
     for(let i=1;i<contentarr.length;i++){
         if(contentarr[i]=="" && (contentarr[i-1]== null || contentarr[i-1]=="")){
             contentarr[i]=null;
         }
     }
     
     let temp=[];
     for(let i=0;i<contentarr.length;i++){
         if(contentarr[i]!=null){
             temp.push(contentarr[i]);
         }
     }

     contentarr=temp;
     console.table(contentarr);
}

//option -n && option -b
if(option.length >1 &&option[1]=="-n"){
let num=1;
for(let i=0;i<contentarr.length;i++){
    contentarr[i]=num+contentarr[i];
    num++;
}
console.table(contentarr);
}else if(option.lenght >1 && option[1]=="-b"){
    let num=1;
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!=""){
            contentarr[i]=num+contentarr[i];
            num++;
        }
    }
    console.table(contentarr);  
}

let finalcontent=