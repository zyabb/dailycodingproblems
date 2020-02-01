class Log {
  constructor(n) {
    this.maxSize = n;
    this.arr = new Array(n);
    this.currIdx = 0;
  }

  record(orderId) {
    this.arr[this.currIdx] = orderId;
    this.currIdx = (this.currIdx + 1) % this.maxSize;
  }

  getLast(i) {
    return this.arr[this.currIdx - i + this.maxSize] % this.maxSize;
  }
}
