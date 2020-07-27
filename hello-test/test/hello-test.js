const assert = require('assert');
const sum = require('../hello');

// 使用mocha默认的BDD-style测试, describe可以任意嵌套, 以便把相关测试看成一组测试
describe('#hello.js', () => {
    describe('#sum()', () => {
        // mocha提供了before、after、beforeEach和afterEach还实现测试前初始化和测试后释放资源
        before(function () {
            console.log('before:');
        });
        after(function () {
            console.log('after:');
        });
        beforeEach(function () {
            console.log('  beforeEach:');
        });
        afterEach(function () {
            console.log('  afterEach:');
        });
        // it('name', function() {})就代表一个测试
        // 原则是一次只测一种情况, 代码要简单
        it('sum() should return 0', () => {
           assert.strictEqual(sum(), 0); 
        });
        it('sum(1) should return 1', () => {
           assert.strictEqual(sum(1), 1); 
        });
        it('sum(1, 2) should return 3', () => {
           assert.strictEqual(sum(1, 2), 3); 
        });
        it('sum(1, 2, 3) should return 6', () => {
           assert.strictEqual(sum(1, 2, 3), 6); 
        });
    });
});