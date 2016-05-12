// PROTOTIPE OOP
function human() {
    this.name = 'Petya';
    this.age = '30';
    this.sex = 'male';
    this.height = '180 cm';
    this.weight = '80 kg';
}

function worker() {
    this.placeOfJob = 'IBM';
    this.salary = '1000$';
    this.doWork = function() {
        alert('I like my Work!');
    }
}

function student() {
    this.placeOfStudy = 'Lviv National University of Ivan Franko';
    this.scholarship = '100$';
    this.watchSoapOpera = function() {
        alert('This is my favorit soap opera!');
    }
}

worker.prototype = new human();
student.prototype = new human();

var worker1 = new worker();
console.log('Worker1 place of job: ', worker1.placeOfJob);
console.log('Worker1 salary: ', worker1.salary);
console.log('Worker1 age: ', worker1.age);
console.log('Worker1 height: ', worker1.height);
console.log('Worker1 weight: ', worker1.weight);
console.log('---------------------------------------------------');

var student1 = new student();
console.log('Student1 name: ', student1.name);
console.log('Student1 weight: ', student1.weight);
console.log('Student1 place of study: ', student1.placeOfStudy);
console.log('---------------------------------------------------');

var student2 = new student();
console.log('Student2 sex: ', student2.sex);
console.log('Student2 height: ', student2.height);
console.log('Student2 age: ', student2.age);
console.log('Student2 scholarship: ', student2.scholarship);