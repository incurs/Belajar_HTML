// Deklarasi objek
let person = {
  name: 'John Doe',
  age: 25,
  occupation: 'Developer'
};

// Mengakses nilai dalam objek
console.log(person.name); // Output: John Doe

// Menambahkan properti baru ke objek
person.city = 'New York';
console.log(person); // Output: { name: 'John Doe', age: 25, occupation: 'Developer', city: 'New York' }

// Menghapus properti dari objek
delete person.age;
console.log(person); // Output: { name: 'John Doe', occupation: 'Developer', city: 'New York' }

