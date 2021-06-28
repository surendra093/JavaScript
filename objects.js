// Object creation (Similar to constructor)
function student(){

    this.name = "daniel";
    this.age = 10;
    this.id = 536;
}

let Student = new student();
//alert("details of a person:" + Student.name + ", age:"+Student.age+", id:"+Student.id)

function createPerson(){
 
      let person = new Object();
      person.name = "Sam";
      person.age = 21;
      person.no = 3892783288742;

      return person;

}

console.log(createPerson());

function createPerson2(){

       let person = {};
       person['name'] = "Nag";
       person['age'] = 26;
       person['no'] = 365785962934;

       delete person.name;            //to delete a property from object.
    return person;
}


//let person2 = createPerson2();

console.log(createPerson2());

/*alert("details of a person:" + Student.name + ", age:"+Student.age+", id:"+Student.id+
         " details of a person:" + person2.name + ", age:"+person2.age+", No:"+person2.no);*/


/* object creation using Object.create()*/
let animal = {
         
                type: 'invertibrates',
                displayType : function(){
                     alert("The animal is:"+this.type);
                }
         };
         
let Animal_1 = Object.create(animal);
//Animal_1.type = "Vertibrates";
Animal_1.displayType(); 
/*
let Animal_2 = Object.create(animal);
Animal_2.type = "SeaAnimal";
Animal_2.displayType();*/
         