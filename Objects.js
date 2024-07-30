let a = {}; //object
let b = 'huy'; //string
console.log('type of a:', typeof a, 'type of b: ', typeof b); //type of a: object type of b:  string


// format code shift alt F
let object = {
    name: 'Pham Van Huy',
    id: 'CT070326'
//  key: value
};


// thêm key
object.email = 'huy9008437@gmail.com'; // cách 1
object['address'] = 'Ninh Binh'; // cách 2

console.log(object);
console.log('My name: ', object.name);
console.log('My name: ', object['name']);
