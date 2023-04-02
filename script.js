// fetch("https://reqres.in/api/users?page=2");
// .then( (response) => {
//     console.log('ok');//resolve

// })
// .catch((error) => {
//     console.log('error'); //reject
// });

//promice statuses:
// 1. pending
// 2. fulfilled: resolved & rejected (ორივე ფუნქციებია);

//settimeout იწყობა ასინქრონული ოპერაციები, გადაეცემა ორი პარამეტრი, პირველი ფუნქცია და მეორე დრო

// let lottery = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve("You win");
//     } else {
//       reject("You lost");
//     }
//   }, 5000);
// });

// lottery

//   .then((response) => console.log(response)) // resolved ფუქნციის პასუხი
//   .catch((error) => console.log(error)); // rejected ფუქნციის პასუხი

//promisifying

// let wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2) // ორი წამის მერე დარეზოლვდება

//   .then(() => {
//     console.log(" 2 seconds later");
//     return wait(3);
//   })
//   .then(() => {
//     console.log("3 seconds later");
//   });

// console.log("start");

// let promise = new Promise((resolve, reject) => {
//   console.log(1); //სინქრონული
//   resolve('hello');
//   reject('error'); //ფუნქცია გამოვიძახე და შედეგს ვიღებ response ცვლადში
// });
// promise.then((response) => console.log(response)); //ასინქრონული

// console.log("end"); //სინქრონული
// // start, 1, end, hello

//promise დროს ფუქნცია ხდება ასინქრონული , ჯერ სრულდება სინქრონული და შემდეგ ასინქრონული კოდი;


console.log("start");

 let promise = new Promise((resolve, reject) => {
console.log(1);

 })
 promise.then (response => log(2));
 console.log('end');
 //start, 1, end,

//  2 არ გამოვა, რადგან resolve არ ვიძახებ