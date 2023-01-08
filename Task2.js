//66. Plus One

/**Условия
 * Вам дано большое целое число ,
 *  представленное в виде массива целых чисел digits,
 *  где каждое число digits[i]является цифрой целого числа. 
 * Цифры упорядочены от наиболее значащего к наименее значащему
 *  в порядке слева направо. Большое целое 
 * число не содержит начальных символов .ith0

  Увеличьте большое целое число на единицу и верните результирующий массив цифр .
 Пример 1:

Ввод: цифры = [1,2,3]
 Вывод: [1,2,4]
 Объяснение: Массив представляет целое число 123.
Увеличение на единицу дает 123 + 1 = 124.
Таким образом, результат должен быть [1,2,4].
Пример 2:

Ввод: цифры = [4,3,2,1]
 Вывод: [4,3,2,2]
 Объяснение: Массив представляет целое число 4321.
Увеличение на единицу дает 4321 + 1 = 4322.
Таким образом, результат должен быть [4,3,2,2].
Пример 3:

Ввод: цифры = [9]
 Вывод: [1,0]
 Объяснение: Массив представляет целое число 9.
Увеличение на единицу дает 9 + 1 = 10.
Таким образом, результат должен быть [1,0].
 
  */

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9]));

//Как я решил ?
/**
 * 1.Чтоб проверить каждый элемент массива я запустил цикл
 * 2.Чтоб бы получить последний элемент массива я сделал слеюудщим образом
 * let i = digits.length - 1 а также сделал i > 0 , чтоб цикл срабатывал лишь в том случае если элемент массива больше нуля
 * 3.А также добовлял один последнему элменту массива digits[i]++
 * 4.Внутри цикла добавил условия , если элемент массива больше 9 то измени его на 0
 * 5.После того как условия выполняется то к началу массива мы добавляем 0 с помощью метода unshift()
 * 6. Потом возвращаем массив
 */
