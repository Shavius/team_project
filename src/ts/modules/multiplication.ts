/**
 * Функция умножает два числа и возвращает строку с ответом.
 *
 * @param num1 - Первое число для умножения. Если аргумент не передан, то по умолчанию равен 0.
 * @param num2 - Второе число для умножения. Если аргумент не передан, то по умолчанию равен 0.
 * @returns Строка с ответом в формате "answer {res}", где res - результат умножения num1 на num2.
 */
export default function multiplication(num1 = 0, num2 = 0): string {
	const res = num1 * num2;
	const resText = `answer ${res}`;
	return resText;
}
