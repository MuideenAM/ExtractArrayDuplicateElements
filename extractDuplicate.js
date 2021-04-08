const arr1 = [{"name" : "Clinton"}, {"age" : 20}];
const arr2 = [{"name" : "Newman"}, {"age" : 20}];

const extractDuplicate = value => {
  for(let i=0; i<arr2.length; i++) {
    if( JSON.stringify(arr2[i]) == JSON.stringify(value) )
      return value;
  }
}

console.log( arr1.filter(extractDuplicate) );