import PersonWarrior from "../modules/PersonWarrior";

describe("PersonWarrior", () => {
	it("Return string", () => {
		const personWarrior = new PersonWarrior("Lenargo", 38, "Human", 100, 120);

		expect(personWarrior.health).toBe(100);
		expect(personWarrior.damage).toBe(120);
		expect(personWarrior.getInfo()).toBe("Имя: Lenargo Расса: Human Возраст: 38 Жызни: 100 Урон: 120");
	});
});
