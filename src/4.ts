class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): number {
        return this.key.getSignature();
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[]

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(myKey: Key): void;
}

class MyHouse extends House {

    constructor(key: Key) {
        super(key);
    }
    
    openDoor(myKey) {
        if (myKey.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}
    
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};