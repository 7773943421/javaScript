var person = /** @class */ (function () {
    function person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    person.prototype.age = function () {
        return this._age;
    };
    return person;
}());
var objperson1 = new person(0); //object
//objectperson1.growOld();
var growOldss = objperson1.growOld;
growOldss();
console.log('age', objperson1.age());
