console.log('hello world');//print
//prompt('helloworld');//input
//สร้างตัวแปร string ,number,

let name= "tiw";//string
let number =20;//intiger
let height =170.5;//ทศนิยม
const idcard = "121000000";
//const=ค่าคงที่ update ค่าไม่ได้
//let= update ค่าได้

//boolean
let inhandsome = "true";
//name="prerm";
console.log("My name is",name);
console.log("i'm",number,"year old");


//operetor
let num1=5;
let num2=10;
let result = num1+num2;// + - * / %
console.log("result=",result);

//condition
//  > >= < <= == !=
let num3=5;
let num4=10;
let condition  = num1==num2;//เปรียบเทียบ Ture-false
console.log("num is ",condition);

//if-else 
if (num1>=num2){
    console.log("yes");
}else if(num2>=num1){
    console.log("Yes");
}else{
    console.log("No");
}

//! สลับ true เป็น false,false เป็น true
if (!(num1>=num2)){
    console.log("yes");
}
//Loop  while,for

let counter = 0;

while(counter<=10){
    console.log("hello world");
    //counter=counter+1;
    counter++
}
for (let n=0;n<10;n++){
    console.log("hello world");
}


//Array 
console.log("array");
    let ages=[20,21,22];
    console.log("ages",ages[0]);//เริ่มจากทำแหน่งที่0
    console.log("ages",ages);

//แทนที่ 
ages=[40,42];
console.log("ages",ages);

//ต่อ array
ages.push(55);
console.log("ages",ages);

ages.pop();
console.log("ages",ages);

//ค้นหา
if(ages.includes(40)){
    console.log("you have 40");
}

//เรียงลำดับ
ages.sort();
console.log(ages);
//แบบที่1
let score=[10,20,30];
for(let i=0;i<score.length;i++){
    console.log("score:",score[i]);
}
score.push(50);
//แบบที่2
score.forEach((s)=>{
    console.log("score:",s)
})

//.map
score=score.map((s)=>{
    return s*2;  
})
score.forEach((s)=>{
    console.log("new score:",s)
})





//object

/*let student={
    age:20,
    nicname:"tiw",
    gread:"a"
};
console.log(student)
//เข้าถึงข้อมูลโดยใช้จุด
console.log("age=",student.age)
console.log("nicname=",student.nicname)*/

//objact in array
console.log("objact in array");
let student1=[{
    age:20,
    nicname:"tiw",
    gread:"a"
},{
    age:19,
    nicname:"pem",
    gread:"B"
}]
student1.push({
    age:30,
    nicname:"jhon",
    gread:"A"
})

for(let index=0; index < student1.length ; index++){
    console.log("sutdent",(index+1))
    console.log("age=",student1[index].age)
    console.log("nicname=",student1[index].nicname)
    console.log("gread=",student1[index].gread)
}
//function
let score1=50;
let score2=70;
//ประกาศ function แบบที่1
function calculator_grade(score){
    if(score >= 80){
        grade="A";
    }else if(score >=70){
        grade="B";
    }else if(score >= 80){
        grade="C";
    }else if(score >= 80){
        grade="D";
    }else{
        grade="F";
    }
    return grade;
}
//เรียกใช้
let grade1 = calculator_grade(score1);
let grade2 = calculator_grade(score2);
console.log('graed1 = '+grade1)
console.log('graed2 = '+grade2)

//ประกาศ function แบบที่2
let calculator_grade1=(score)=>{
    if(score >= 80){
        grade="A";
    }else if(score >=70){
        grade="B";
    }else if(score >= 80){
        grade="C";
    }else if(score >= 80){
        grade="D";
    }else{
        grade="F";
    }
    return grade;
}

//เรียกใช้
let grade3 = calculator_grade1(score1);
let grade4 = calculator_grade1(score2);
console.log('graed3 = '+grade3)
console.log('graed4 = '+grade4)


