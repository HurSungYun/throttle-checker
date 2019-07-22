/* tslint:disable:no-console */

import { ThrottleChecker } from '../src/index';

const config = {
  period: 5,
  throttle_time: 5,
  threshold: 3,
};

function throttleCallback() {
  console.log('throttled!');
}

const throttle = new ThrottleChecker(config, throttleCallback);

console.log('1: ' + throttle.check());
console.log('2: ' + throttle.check());
console.log('3: ' + throttle.check());
console.log('4: ' + throttle.check());
console.log('5: ' + throttle.check());

console.log('waiting 5 secs');

setTimeout(function () {
  console.log('1: ' + throttle.check());
  console.log('2: ' + throttle.check());
  console.log('3: ' + throttle.check());
  console.log('4: ' + throttle.check());
  console.log('5: ' + throttle.check());

  console.log('waiting 5 secs again');

  setTimeout(function () {
    console.log('1: ' + throttle.check());
    console.log('2: ' + throttle.check());
    console.log('3: ' + throttle.check());
    console.log('4: ' + throttle.check());
    console.log('5: ' + throttle.check());

    console.log('start happy path test');
    setTimeout(testHappyCase, 1000);
  }, 5100);
}, 5100);

function testHappyCase() {
  const throttleHappy = new ThrottleChecker(config, throttleCallback);
  console.log('1: ' + throttleHappy.check());
  console.log('2: ' + throttleHappy.check());

  console.log('waiting 5 secs');
  setTimeout(function () {
    console.log('1: ' + throttleHappy.check());
    console.log('2: ' + throttleHappy.check());
  }, 5100);
}
