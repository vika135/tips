const mainArr = {
    firstNestedArr: [
      {id: 1, title: '1rtert'},
      {id: 2, title: '2fdsfsd'}
    ],
    secondNestedArr: [
      {id: 3, title: '3rewfr'},
      {id: 4, title: '4frefdsf'}
    ]
}

//*****************************/
// Метод, который в объекте,
// состоящем из массивов
// объектов, меняет одно из полей
// одного вложенного объекта
//*****************************/

let findPost = (mainArr, index) => {
  let obj
  Object.values(mainArr).forEach(arr => {
    obj = arr.find(item => item.id === index)
    if (obj) obj.title = 'new title!'
  })
}

findPost(mainArr, 1)
