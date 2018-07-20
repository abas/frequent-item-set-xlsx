const fi = require('frequent-itemset');
const xlsx2json = require('xlsx2json');

/**
 * configuration
 * ubah @param {filename} nama_file
 */
const PATH = 'doc/'
var filename = 'Book1.xlsx'

const file = PATH+filename
const min_support = 0.5 // -> 50%

var dataExcel = xlsx2json(file,{
    dataStartingRow: 1,
    dataStartingCol: 2
  })
  .then(data => {
    var jsonData = data[0]
    let mapJson = jsonData.map(item => {
      let arr = []
      for(var data in item){
        if(item[data]!='' && item[data] != null){
          arr.push(item[data])
        }
      }     
      return arr
    })
    /**
     * @param {mapjson} array_of_object from json
     * @param {min_support} minimal_support defined
     */
    var itemset = fi(mapJson,min_support,true)
    return itemset
});

console.log("generating frequent itemset...")

setTimeout(function(){
  console.log("frequent itemset : ")
  console.log(dataExcel)
}, 5000);
