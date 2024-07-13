//your JS code here. If required.
// Create the student object with a name property
let student = {
    name: "John Doe"
};

// Add a getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Test the getKeys method on the student object
console.log(student.getKeys());