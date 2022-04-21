class Insect {
    constructor(name, legsnumber) {
        this.name = name;
        this.legs = legsnumber;
    }
}

class Centipede extends Insect {
    getLegs() {
        return `Cześć mam na imię ${this.name} jestem stonogą i mam ${this.legs} nóg`
    }
}

class Spider extends Insect {
    getLegs() {
        return `Cześć mam na imię ${this.name} jestem pająkiem i mam ${this.legs} nóg`
    }
}

const stonoga = new Centipede("Lucy", 20);
const pajonk = new Spider("Majkel", 8);



const infospider = document.getElementById("info-spider");
const infocentipede = document.getElementById("info-centipede");

infospider.innerText = stonoga.getLegs();
infocentipede.innerText = pajonk.getLegs();