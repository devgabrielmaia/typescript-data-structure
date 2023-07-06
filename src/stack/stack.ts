export class Stack<T = any> {
  private count: number = 0;
  private items: { [key: number]: T } = {}

  push(item: T): void {
    this.items[this.count] = item;
    this.count++
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count];
    return result
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1]
  }

  isEmpty(): boolean {
    return !(this.count > 0)
  }

  size(): number {
    return this.count
  }

  clear(): void {
    this.items = {}
    this.count = 0
  }

  toString(): string | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString: string = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}