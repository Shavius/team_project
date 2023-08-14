import Person from "../modules/Person";

describe("Person class tests", () => {
	let person: Person;

	beforeEach(() => {
		person = new Person("John", 30, "Human");
	});

	it("should create a person instance", () => {
		expect(person).toBeInstanceOf(Person);
	});

	it("should have the correct properties", () => {
		expect(person.name).toEqual("John");
		expect(person.age).toEqual(30);
		expect(person.race).toEqual("Human");
	});

	it("should return correct person info", () => {
		const info = person.getInfoPerson();
		expect(info).toEqual("Имя: John Возраст: 30 Раса: Human");
	});

	it("should update properties correctly", () => {
		person.name = "Jane";
		person.age = 25;
		person.race = "Elf";

		expect(person.name).toEqual("Jane");
		expect(person.age).toEqual(25);
		expect(person.race).toEqual("Elf");
	});
});
