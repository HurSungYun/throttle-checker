export class ThrottleChecker {
  period: number; // period window for checking throttling. seconds
  threshold: number; // threshold count for throttling.
  count: number;
  reset_timestamp: number;
  throttle_time: number; // time to delay reset time when throttled

  constructor(period: number, throttleTime: number, threshold: number) {
    this.period = period;
    this.threshold = threshold;
    this.count = 0;
    this.reset_timestamp = Date.now() + period * 1000;
    this.throttle_time = throttleTime * 1000;
  }

  reset(ts: number) {
    this.count = 0;
    this.reset_timestamp = ts + this.period * 1000;
  }

  setThrottle() {
    this.reset_timestamp += this.throttle_time;
  }

  check(now = Date.now()) {
    if (now > this.reset_timestamp) {
      this.reset(now);
    }
    this.count++;
    if (this.count === this.threshold) {
      this.setThrottle();
      return true;
    } else if (this.count > this.threshold) {
      return true;
    }
    return false;
  }
}
