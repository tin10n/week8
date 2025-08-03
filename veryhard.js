function consPerson(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

consPerson.prototype.exercise = function () {
  console.log("Running is fun! - said no one ever.");
};

consPerson.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}`);
};

function consProgrammer(name, job, age, language) {
  consPerson.call(this,name, job, age); 
  this.language = language || [];
  this.busy = true; 
}

consProgrammer.prototype = Object.create(consPerson.prototype);
consProgrammer.prototype.constructor = consProgrammer;

consProgrammer.prototype.completeTask = function () {
  this.busy = false; 
};

consProgrammer.prototype.acceptNewTask = function () {
  this.busy = true; 
};

consProgrammer.prototype.offerNewTask = function () {
  if (this.busy === true) {
    console.log(`${this.name} can't accept any new tasks right now.`);
  } else {
    console.log(`${this.name} would love to take on a new responsibility.`);
  }
};

consProgrammer.prototype.learnLanguage = function (language) {
  this.language.push(language);
};

consProgrammer.prototype.listLanguage = function () {
  return this.language.join(", ");
};

const person1 = new consPerson('Brad', 'Backend Engineer', 20);
const c1 = new consProgrammer('Liana', 'DevOps', 35, ['HTML', 'C#', 'LUA']);
const c2 = new consProgrammer('Edwin', 'Janitor', 55, ['HTML', 'SASS', 'Ruby']);
const c3 = new consProgrammer('Manny', 'SysOps', 31, ['HTML', 'CSS', 'JS', 'R']);

// Testing
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise(); 
person1.fetchJob();