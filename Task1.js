//9. Palindrome Number

/**
 * Условия 
 * Учитывая целое число x, вернуть, true если x это
палиндром
, и в false противном случае .


Example 1:

Input: x = 121 
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */


var isPalindrome = function(x) {
  let reversed = x.toString().split('').reverse().join('')
  return (x.toString() === reversed)
};


/**
 * 
 * Как я решил ?
 * 
 * Для начала создал переменную
 * Внутри которой я конвертирую в строку X и делю каждый элмент строки в отдельный  и делать рерверс и соеденяю
 * И если это переменная равна в строке x то верти ее 
 */