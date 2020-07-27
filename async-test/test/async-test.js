const assert = require('assert');
const hello = require('../hello');

describe('#hello.js', () => {
    describe('#sum()', () => {
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
        // 测试异步函数要传一个带参函数, 通常命名为done
        // 需要在函数内部手动调用done()表示测试成功, done(error)表示测试出错
        it('async-calculate() - 1', function(done) {
            new Promise(hello).then(done()).catch(error=>done(error));
        });
        // ES7 async写法
        it('async-calculate() - 2', (done) => {
            (async function() {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch(error) {
                    done(error);
                }
            })();
        });
        // 也可以直接把async函数当成同步函数来测试
        it('async-calculate() -3 ', async () => {
           let r = await hello();
           assert.strictEqual(r, 15); 
        });
    });
});