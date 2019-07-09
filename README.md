# throttle-checker

simple throttle checker for Typescript

```typescript
import { ThrottleChecker } from 'throttle-checker';

const checker = new ThrottleChecker();

if (checker.check()) {
  console.log('throttled!');
}
```
