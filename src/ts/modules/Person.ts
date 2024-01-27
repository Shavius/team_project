import type IPerson from "../interfaces/IPerson";

export default class Person implements IPerson {
	name: string;
	age: number;
	race: string;

	constructor(name: string, age: number, race: string) {
		this.name = name;
		this.age = age;
		this.race = race;
	}

	getInfoPerson(): string {
		return `Имя: ${this.name} Возраст: ${this.age} Раса: ${this.race}`;
	}
}
