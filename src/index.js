// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName };
const createNotEnumerableProperty = (propertyName) => { return Symbol.for(propertyName) };
const createProtoMagicObject = () => {
	    let object = () => {};
        object.prototype = object.__proto__;
        return object;
};
let count = 0;
const incrementor = () => {
	    count++;
        Function.prototype.valueOf = () => count;
        return incrementor;
};
let count1 = 0;
const asyncIncrementor = () => new Promise(resolve => resolve(++count1));
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => { return new Promise((resolve) => {
        setTimeout(() => {
        resolve(value);}, 1000);
     });};
const getDeepPropertiesCount = (object) => {
	    let count3 = 0;
        for(let key in object){
        count3++;
        count3 += getDeepPropertiesCount(object[key]);
        }
 
        return count3;
};
const createSerializedObject = () => { return Object('yeap') };
const toBuffer = () => {};
const sortByProto = (array) => { return array.sort((left,right) => left - right) };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;