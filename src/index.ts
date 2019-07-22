interface ThrottleCheckerConfig {
  period: number;
  throttle_time: number;
  threshold: number;
}

export class ThrottleChecker {
  period: number; // period window for checking throttling. seconds
  threshold: number; // threshold count for throttling.
  count: number;
  reset_timestamp: number;
  throttle_time: number; // time to delay reset time when throttled
  throttle_callback: Function | null;

  constructor(config: ThrottleCheckerConfig, throttleCallback?: Function) {
    this.period = config.period;
    this.threshold = config.threshold;
    this.count = 0;
    this.reset_timestamp = Date.now() + config.period * 1000;
    this.throttle_time = config.throttle_time * 1000;
    this.throttle_callback = throttleCallback || null;
  }

  reset(ts: number) {
    this.count = 0;
    this.reset_timestamp = ts + this.period * 1000;
  }

  setThrottle() {
    this.reset_timestamp += this.throttle_time;
    if (this.throttle_callback) {
      this.throttle_callback();
    }
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
