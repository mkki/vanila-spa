type Subscriber<T> = (state: T) => void;

export abstract class ViewModel<T> {
  private subscribers: Subscriber<T>[] = [];
  protected state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }

  subscribe(callback: Subscriber<T>): void {
    this.subscribers.push(callback);
    callback(this.state);
  }

  protected notify(): void {
    for (const callback of this.subscribers) {
      callback(this.state);
    }
  }

  getState(): T {
    return this.state;
  }

  setState(newState: T): void {
    this.state = newState;
    this.notify();
  }
}