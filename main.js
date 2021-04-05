
//Bài 1:
// const str_input = prompt('nhập vào chuỗi:')
// let srt = str_input.split('')
// let srtReverse =[]
// console.log(srt);
// for (i = srt.length-1;i>=0;i--){
//  srtReverse.push(srt[i])
// }
// console.log(srtReverse.join(''));

//Bài 2:
// const str_input = prompt('Nhập vào chuỗi')
// let srt = str_input.split(' ')
// let srtUpper =[]
// for (let i = 0; i < srt.length; i++) {
//     console.log();
//    srtUpper.push(srt[i][0].toUpperCase() + srt[i].slice(1))
// }
// console.log(srtUpper.join(' '));

// //Bài 3:
// const arr = ['one', 'two', 'three', 'one', 'one', 'four', 'five', 'four', 'five', 'five'];
// var newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// // Bài 4:
// const member = [
//     {
//         name: 'chung',
//         age: 23,
//         salary: 2000,
//         position: 'dev'
//     },
//     {
//         name: 'nam',
//         age: 22,
//         salary: 1000,
//         position: 'dev'
//     },
//     {
//         name: 'hoà',
//         age: 23,
//         salary: 4000,
//         position: 'tester'
//     }
// ]
// function read(a) {
//     for (i = 0; i < a.length; i++) {
//         console.log(`Nhân viên ${i + 1} :`);
//         console.log(`Tên : ${a[i].name} `);
//         console.log(`Tuổi : ${a[i].age} `);
//         console.log(`Mức Lương : ${a[i].salary} `);
//         console.log(`Vị trí : ${a[i].position} `);
//         console.log('');
//     }
// }
// while (true) {
//     const commant = prompt('Nhập vào lệnh (C/R/U/D) :')
//     if (commant.toLowerCase() === 'r') {
//         read(member);
//     } else if (commant.toLowerCase() === 'c') {
//         const newName = prompt('Nhập tên nhân viên:')
//         const newAge = prompt('Nhập tuổi nhân viên:')
//         const newSalary = prompt('Nhập mức lương nhân viên:')
//         const newPosition = prompt('Nhập vị trí nhân viên:')
//         member.push({
//             name: newName,
//             age: newAge,
//             salary: newSalary,
//             position: newPosition,
//         })
//         read(member);
//     } else if (commant.toLowerCase() === 'u') {
//         const indexUpdate = prompt('Nhập vào vị trí nhân viên muốn update')
//         if (indexUpdate < member.length) {
//             const newName = prompt('Nhập tên nhân viên:')
//             const newAge = prompt('Nhập tuổi nhân viên:')
//             const newSalary = prompt('Nhập mức lương nhân viên:')
//             const newPosition = prompt('Nhập vị trí nhân viên:')
//             member.splice(indexUpdate - 1, 1, {
//                 name: newName,
//                 age: newAge,
//                 salary: newSalary,
//                 position: newPosition,
//             })
//             read(member);
//         }
//     } else if (commant.toLowerCase() === 'd') {
//         const indexUpdate = prompt('Nhập vào vị trí nhân viên muốn delete')
//         if (indexUpdate<member.length) {
//             member.splice(indexUpdate,1)
//             read(member);
//         }
//     } else {
//         alert('xin vui lòng nhập lại')
//     }
// }

// //Bài 5:
// const date = Number(prompt('Nhập vào ngày:'))
// const month = Number(prompt('Nhập vào tháng:'))
// const yeah = Number(prompt('Nhập vào năm:'))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if (date > 0 && date <= 31) {
//             console.log(` Ngày ${date}/${month}/${yeah} : Hợp lệ`);
//             if (month === 12 && date === 31) {
//                 console.log(` Ngày  kế tiếp ${date - 30}/1/${yeah + 1}`)

//             } else if (date < 31) {
//                 console.log(` Ngày  kế tiếp ${date + 1}/${month}/${yeah}`)
//             } else {
//                 console.log(` Ngày kế tiếp ${date - 30}/${month + 1}/${yeah}`)
//             }
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         if (date > 0 && date < 31) {
//             console.log(` Ngày ${date}/${month}/${yeah} : Hợp lệ`);
//             if (date < 30) {
//                 console.log(` Ngày kế tiếp ${date + 1}/${month}/${yeah}`)
//             } else {
//                 console.log(` Ngày kế tiếp ${date - 29}/${month + 1}/${yeah}`)
//             }
//         }
//         break;
//     case 2:
//         if (date > 0 && date <= 28) {
//             console.log(` Ngày ${date}/${month}/${yeah} : Hợp lệ`);
//             if (date < 28) {
//                 console.log(` Ngày kế tiếp ${date + 1}/${month}/${yeah}`)
//             } else {
//                 console.log(` Ngày kế tiếp ${date - 27}/${month + 1}/${yeah}`)
//             }
//             break;
//         } else {
//             console.log(` Ngày ${date}/${month}/${yeah} : Không hợp lệ`);
//             break
//         }
//     default:
//         console.log(` Ngày ${date}/${month}/${yeah} : Không hợp lệ`);
//         break

// }
