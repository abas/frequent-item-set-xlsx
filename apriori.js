const fi = require('frequent-itemset');
const xlsx2json = require('xlsx2json');

/**
 * configuration
 * ubah @param {filename} nama_file
 */
const PATH = 'doc/'
var filename = 'Book1.xlsx'

const file = PATH+filename

var dataExcel = xlsx2json(file,{
    dataStartingRow: 1,
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
    var itemset = fi(mapJson,0.5,true)
    return itemset
});

console.log("generating frequent itemset...")

setTimeout(function(){
  console.log("frequent itemset : ")
  console.log(dataExcel)
}, 5000);
