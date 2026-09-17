let p = new Promise((resolve, reject) => {
    let num = 39 * 2;
    setTimeout(() => {
      if (num == 78){
        resolve('Correct')
      } else {
        reject('Incorrect')
      }
    }, 1500);
})

p.then((message) => {
    console.log('the number is ' + message)
}).catch((message) => {
    console.log('the number is ' + message)
})