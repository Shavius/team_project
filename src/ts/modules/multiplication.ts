/**
 * Function multiplication
 * @param num1 Number 1
 * @param num2 Number 2
 * @returns String
 */
export default function multiplication(num1 = 0, num2 = 0): string {
	const res = num1 * num2;
	const resText = `answer ${res}`;
	return resText;
}
