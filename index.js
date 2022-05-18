console.log("Working");

const StudentPrototype = {
    calcAge() {
        console.log(2022 - this.bYear);
    },
    initialise(fname, lname, bYear) {
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const honey = Object.create(StudentPrototype);
console.log(honey);
honey.initialise("honey", "tambi", 1995);
console.log(honey);
honey.calcAge();

const PrsonPrototype = Object.create(StudentPrototype);
console.log(PrsonPrototype);

PrsonPrototype.initialiseOne = function(fname, lname, bYear, course) {
    StudentPrototype.initialise.call(this, fname, lname, bYear);
    this.course = course;
    // this.fname = fname;
    // this.lname = lname;
    // this.bYear = bYear;
    // this.course = course;
}
PrsonPrototype.introduce = function() {
    console.log(`My name is ${this.fname} ${this.lname} and my course is ${this.course}`);
}

const jay = Object.create(PrsonPrototype);
console.log(jay);
jay.initialiseOne("Jay", "Dubey", 1986, "CSE");
console.log(jay);
jay.calcAge();
jay.introduce();

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);


// Closures - Closures is not something that create manually or explicitly. It happens automatically in certain situations which a function recognize.
// Closures makes a function allthe variables that existed at the function birthplace initially 
// Any function always has access to the variables enbvironment of the execution context in which the function was created.

const ticketBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`);
    };
};

const bookie = ticketBooking();
// console.log(bookie);
bookie();
bookie();
bookie();
console.dir(bookie);