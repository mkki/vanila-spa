type Subscriber<T> = (state: T) => void;

export abstract class ViewModel<T> {
  private subscribers: Subscriber<T>[] = [];

  subscribe(callback: Subscriber<T>): void {
    this.subscribers.push(callback);
  }

  protected notify(payload: T): void {
    for (const callback of this.subscribers) {
      callback(payload);
    }
  }
}