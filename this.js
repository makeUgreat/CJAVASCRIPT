
// 'use strict';  // 초기화 없이 할당하는거 금지

var x = 300;

var obj = {
    data : {
        func() {
            console.log(this)
        }
    }
}

obj.data.func();


var something = {}

function mm(){
    this.name = 'KIM'
    this.age = 18
}

console.log(mm);
console.log(mm.name);
console.log(mm.age);
console.log(new mm);
// console.loge(new mm.name); 이런건 불가능
var inst = new mm;
console.log(inst.name);
console.log(inst.age);
