const foo = (object) => {
    let {name, age, profession} = object;
    return  `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${profession}.`
}

const wally = {
    name: "Wally",
    age: 2,
    profession: "naprawianie innych robotów"
}


console.log(foo(wally));
