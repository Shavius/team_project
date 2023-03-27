export default function division(num1 = 0, num2 = 0): string {
	const res = num1 / num2;

	if (!Number.isNaN(res)) {
		return `answer ${res}`;
	}

	return `answer 0`;
}
