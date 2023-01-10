// // const { Console } = require("console");

// // const removeDublicates = () => {
// //   let insertIndex = 1;
// //   const nums = [1, 2, 3]
// //   for (let i = 1; i < nums.length; i++) {
// //     // We skip to next index if we see a duplicate element
// //     if (nums[i - 1] != nums[i]) {
// //       /* Storing the unique element at insertIndex index and incrementing
// //          the insertIndex by 1 */
// //       nums[insertIndex] = nums[i]
// //     console.log(insertIndex++)
// //     }
// //   }
// //   return insertIndex;
// // }

// // removeDublicates()


let removeDuplicates = function (nums) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      //это тот элемент котрый мы хотим удалить
      //1 это количество элементов 
      return nums.splice(i, 1);
    }
  }
};

console.log(removeDuplicates([1, 2, 2]))