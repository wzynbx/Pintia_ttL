'use strict'
let set=new Set(['abc','def']);
//转换成数组
console.log(Array.from(set));
console.log([...set]);
set=new Set("123456789");
//移除大于5的值
set=new Set([...set].filter((value)=>{
    return value<=5;//将字符串数字隐式转换成数字再进行比较
}))
console.log(set);//Set(5) { '1', '2', '3', '4', '5' }
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
set.forEach(function(value){
    console.log(value);
})
for (const value of set) {
    console.dir(value);    
}







