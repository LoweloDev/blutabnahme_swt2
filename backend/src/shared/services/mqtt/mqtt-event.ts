export class MqttEvent {
  payload: any;
  action: string;

  constructor(action: string, payload: any) {
    this.action = action;
    this.payload = payload;
  }
}
