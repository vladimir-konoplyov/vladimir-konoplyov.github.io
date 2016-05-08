// AJAX QUERIES
$(function() {
    $('.search-form').on('submit', function() {
        var enteredQuery = $('#entered-query').val();
        $.ajax({
            url: "http://api.riffsy.com/v1/search?tag=" + enteredQuery + "&limit=10",
            // dataType: 'jsonp',
            // method : 'GET',
            success: function(data, textStatus) {
                console.log('Success: ', data);
                var ul = document.createElement('ul');
                 if (data.results.length == 0) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML =  '<p>There are no results matching.</p>';
                    ul.appendChild(li);
                 }
                $.each(data.results, function(i, val) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML = 'Result №'+ (i+1) + ': ' +'<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+ '</br>' +'<img class="image-output" src="'+val.url+'">'+"</a>";
                    ul.appendChild(li);                   
                });
                $('#out-results').html(ul);
            },
            error: function(data, textStatus) {
                console.log('Error: ', data);
            }
        });    
        return false;  
    });   
});

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
