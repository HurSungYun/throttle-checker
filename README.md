# throttle-checker

simple throttle checker for Typescript

```typescript
import { ThrottleChecker } from 'throttle-checker';

function throttleCallback() {
  console.log('throttled!');
}

const checker = new ThrottleChecker({
  period: 10 * 60, // sec
  throttle_time: 10 * 60, // sec
  threshold: 5,
}, throttleCallback);

for (let i = 0; i < 10; i++) {
  if (checker.check()) {
    console.log('filtered: ' + i);
  }
}
```
