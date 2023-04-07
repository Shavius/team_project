/**
 * Функция выполняет деление двух чисел и возвращает строку с ответом.
 *
 * @param num1 - Первое число для деления. Если аргумент не передан, то по умолчанию равен 0.
 * @param num2 - Второе число для деления. Если аргумент не передан, то по умолчанию равен 0.
 * @returns Строка с ответом в формате "answer {res}", где res - результат деления num1 на num2.
 *
 * @remarks
 * Если num2 равен 0 или не передан, то функция возвращает строку "answer 0".
 */
export default function division(num1 = 0, num2 = 0): string {
	const res = num1 / num2;

	if (!Number.isNaN(res)) {
		return `answer ${res}`;
	}

	return `answer 0`;
}
