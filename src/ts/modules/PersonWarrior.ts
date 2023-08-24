import Person from "./Person";

export default class PersonWarrior extends Person {
	health: number;

	damage: number;

	constructor(name: string, age: number, race: string, health: number, damage: number) {
		super(name, age, race);
		this.health = health;
		this.damage = damage;
	}

	getInfo(): string {
		return `Имя: ${this.name} Расса: ${this.race} Возраст: ${this.age} Жызни: ${this.health} Урон: ${this.damage}`;
	}
}
