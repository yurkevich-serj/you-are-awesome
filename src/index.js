// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName };
const createNotEnumerableProperty = (propertyName) => { return Symbol.for(propertyName) };
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => { return new Promise((resolve) => {
         setTimeout(() => {
           resolve(value);}, 1000);
     });};
const getDeepPropertiesCount = () => {};
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