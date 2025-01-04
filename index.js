let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(console.log);
  // Перевыполнить промис уже не получится, потому что после того как промис уже перешел в состояние выполненного действия, он уже становится неизменным, вызовы уже потом игнорируются 