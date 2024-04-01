// 1-task 1-usul


// let list_1 = [1,2,4]
// let list_2 = [1,3,4]
// let total_list = list_1.concat(list_2)
// let result = total_list.sort()
// console.log(result);


// 1-task 2-usul


// let list_1 = [1,2,4]
// let list_2 = [1,3,4]
// let total_list = [...list_1,...list_2]
// let result = total_list.sort()
// console.log(result);

// 2-task 1-usul


// let nums = [4,5,6,7,0,1,2]
// let result = nums.indexOf(0)
// console.log(result + " - indexda joylashgan");


// 2-task 2-usul



// let nums = [4,5,6,7,0,1,2]
// for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === 0) {
//         console.log(index + " - indexda joylashgan");
//     }
// }


// 3-task 1-usul


// let nums = [5,7,7,8,8,10]
// let target = 8
// let result = ["Mavjud emas"]
// for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === target) {
//         if (result[0] == "Mavjud emas") {
//             result.pop()
//         }
//         result.push(index)
//     }
// }
// console.log(result);



// 3-task 2-usul


// let nums = [5,7,7,8,8,10]
// let target = 8
// let result = ["Mavjud emas"]
// for (let index = 0; index < nums.length; index++) {
//     if (nums.includes(8)){
//         if (result[0] == "Mavjud emas") {
//             result.pop()
//         }
//         result.push(index)
//     }
// }
// console.log(result);

// Ishlamadi 
// yo'l to'g'rimi to'g'ri bo'lsa xatosini etvoring


// 4-task 1-usul


// let massiv = [1,2,3,4,5,6,7,8,9]
// function total(params) {
//     let max_number = Math.max(...massiv)
//     let min_number = Math.min(...massiv)
//     console.log("Massivning ichidadagi eng katta sondan Funtionning parametri shuncha kichik  " + (max_number - params));
//     console.log("Massivning ichidadagi eng kichik sondan Funtionning parametri shuncha katta  " + (min_number - params));
// }
// total(5)


// 4-task 2-usul


// let array = [1,2,0,4,56,6,7,8,9]
// let max_number = array[0]
// let min_number = array[0]
// function total(params) {
//     for (let i = 0; i <= array.length; i++) {
//         if (max_number < array[i]) {
//             max_number = array[i]
//         }
//         if (min_number >= array[i]) {
//             min_number = array[i]
//         }
//     }
//     console.log(max_number,min_number);
//     console.log("Massivning ichidadagi eng katta sondan Funtionning parametri shuncha kichik  " + (max_number - params));
//     console.log("Massivning ichidadagi eng kichik sondan Funtionning parametri shuncha katta  " + (min_number - params));
// }
// total(6)


// 5-task 1-usul


// function total(params_1, params_2) {
//     obj = {number_1: 1, number_2: 2, number_3: 3 }
//     obj.number_1 = params_1
//     obj.number_3 = params_2
// }
// total(5,3) 
// console.log(obj);  


// 6-task


// function total(params) {
//     values_1 = { values_1_a: 21, values_1_b: 5, values_1_c: 2004 }
//     values_2 = { values_2_a: 7, values_2_b: 51, values_2_c: 6 }
//     values_total = Object.assign(values_1, values_2)
//     let max_number = -Infinity;
//     for (var kalit in values_total) {
//         if (values_total.hasOwnProperty(kalit)) {
//             if (values_total[kalit] > max_number) {
//                 max_number = values_total[kalit];
//                 min_number = +Infinity;
//             }
//         }
//         for (var kalit in values_total) {
//             if (values_total.hasOwnProperty(kalit)) {
//                 if (values_total[kalit] < min_number) {
//                     min_number = values_total[kalit];
//                 }
//             }
//         }
//     }
//     console.log("Objectning ichidadagi eng katta sondan Funtionning parametri shuncha kichik  " + (max_number - params));
//     console.log("Objectning ichidadagi eng kichik sondan Funtionning parametri shuncha katta  " + (min_number - params));

// }
// total(5)


// 7-task


// function total(params) {
//     values_1 = { values_1_a: 21, values_1_b: 5, values_1_c: 2004 }
//     values_2 = { values_2_a: 7, values_2_b: 51, values_2_c: 6 }
//     values_3 = { values_3_a: 4, values_3_b: 41, values_3_c: 8 }
//     values_total = Object.assign(values_1, values_2, values_3)
//     let result = 0
//     for (const keys in values_total) {
//         result += values_total[keys]
//     }
//     console.log(result + "  Object valuelari yig'indisi");
//     if (result > params) {
//         console.log("Objectning ichidadagi valuelarning umumiy yig'indisidan Funtionning parametri shuncha kichik  " + (result - params));
//     }
//     else {
//         console.log("Objectning ichidadagi valuelarning umumiy yig'indisidan Funtionning parametri shuncha katta  " + (params - result));
//     }
// }
// total(7)


// 8-task 1-usul


// let massiv = [1, 3, 2, 0, 4, 5]
// let max_number = Math.max(...massiv)
// let min_number = Math.min(...massiv)
// let max_index = massiv.indexOf(max_number);
// let min_index = massiv.indexOf(min_number);
// [massiv[max_index], massiv[min_index]] = [massiv[min_index], massiv[max_index]];
// console.log(massiv);


// 8-task 2-usul


// let array = [1, 3, 2, 0, 4, 5]
// let max_number = array[0]
// let min_number = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (max_number <= array[i]) {
//         max_number = i
//     }
//     if (min_number >= array[i]) {
//         min_number = i
//     }
// }
// console.log(max_number, min_number);
// [array[max_number], array[min_number]] = [array[min_number], array[max_number]];
// console.log(array);