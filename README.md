# throttle-checker

simple throttle checker for Typescript

```typescript
import { ThrottleChecker } from 'throttle-checker';

const period = 10; // time window for checking throttling. seconds
const throttleTime = 10; // time to delay reset time when throttled. seconds
const threshold = 3; // threshold count for throttling.

const checker = new ThrottleChecker(period, throttleTime, threshold);

for (let i = 0; i < 10; i++) {
  if (checker.check()) {
    console.log('throttled!');
  }
}
```
