const fi = require('frequent-itemset');
const xlsx2json = require('xlsx2json');

var dataExcel = xlsx2json('doc/data.xlsx',{
    dataStartingRow: 2,
  })
  .then(data => {
    var jsonData = data[0]
    
    let mapJson = jsonData.map(item => {
      let arr = []
      for(var data in item){
        if(item[data]!=''){
          arr.push(parseInt(item[data]))
        }
      }
      return arr
    })
    // console.log(mapJson);
    // return mapJson
    var itemset = fi(mapJson,0.5,true)
    return itemset
});

console.log("generating data item set :\n")

setTimeout(function(){
  console.log("frequent-itemset : ")
  console.log(dataExcel)
  // console.log("ctrl+c to stop update")
}, 5000);