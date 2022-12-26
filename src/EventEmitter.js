export class EventEmitter {
  constructor(options) {
    this.options = options;
    this.handlers = [];
    this.handlerCount = 0;
  }

  numberOfHandlers() {
    return this.handlers.filter((h) => !!h).length;
  }

  async emit(payload) {
    const promises = [];

    this.options?.logger?.("emit", payload);

    for (const handler of this.handlers) {
      if (handler) {
        const res = handler(payload);
        if (typeof res?.then === "function") {
          promises.push(res);
        }
      }
    }

    await Promise.all(promises);
  }
  on(handler) {
    this.options?.logger?.("on");
    this.handlers.push(handler);
    // eslint-disable-next-line no-plusplus
    return this.handlerCount++;
  }

  off(handlerId) {
    this.delete(handlerId);
  }

  delete(handlerId) {
    this.options?.logger?.("off");
    this.handlers[handlerId] = null;
  }
}
