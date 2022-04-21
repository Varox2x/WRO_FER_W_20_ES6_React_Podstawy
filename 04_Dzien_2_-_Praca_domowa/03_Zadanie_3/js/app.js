const sayHello = (...args) => {
    args.forEach(function (a){
        console.log(`Hello ${a}`);
    })
}

sayHello("Ania", "Kasia", "Steve", "Bogumił");