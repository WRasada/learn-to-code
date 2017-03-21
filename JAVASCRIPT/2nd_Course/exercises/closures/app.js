// function greet(whattosay) {
//
//   return function(name) {
//     console.log(whattosay + ' ' + name);
//   }
//
// }
//
// var sayHi = greet('Hi');
// sayHi('Tony');
//

// function buildFunctions() {
//
//   var arr = [];
//
//   for(var i = 0; i < 3; i++) {
//     arr.push(
//       function() {
//         console.log(i);
//       }
//     )
//   }
//
//   return arr;
//
// }
//
// var fs = buildFunctions();
//
// fs[0]();
// fs[1]();
// fs[2]();
//
//
//
// function buildFunctions2() {
//
//   var arr = [];
//
//   for(var i = 0; i < 3; i++) {
//     let j = i;
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j);
//         }
//       }(i))
//     )
//   }
//
//   return arr;
//
// }
//
// var fs2 = buildFunctions2();
//
// fs2[0]();
// fs2[1]();
// fs2[2]();


// function factory

// function makeGreeting(language) {
//
//   return function(firstname, lastname) {
//     if (language === 'en') {
//       console.log('Hello ' + firstname + ' ' + lastname);
//     }
//
//     if (language === 'es') {
//       console.log('Hola' + firstname + ' ' + lastname);
//     }
//   }
// }
//
// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');
//
// greetEnglish('Wes', 'Rasada');
//
//

// Closures and Callbacks

function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() {
    console.log(greeting);
  }, 3000)
}

sayHiLater();


function tellMeWhenDone(callback) {

  var a = 1000;
  var b = 2000;

  callback();

}

tellMeWhenDone(function() {
  console.log('I am done');
});

tellMeWhenDone(function() {
  console.log('I am finished');
});
