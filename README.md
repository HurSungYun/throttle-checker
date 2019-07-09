# throttle-checker

simple throttle checker for Typescript

```typescript
import { ThrottleChecker } from 'throttle-checker';

const checker = new ThrottleChecker(10, 10, 3);

for (let i = 0; i < 10; i++) {
  if (checker.check()) {
    console.log('throttled!');
  }
}
```
