import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import { Probe } from "./entities/probe.entity";
import { MqttEvent } from "../../shared/services/mqtt/mqtt-event";
import { MqttService } from "../../shared/services/mqtt/mqtt.service";

@EventSubscriber()
export class ProbeSubscriber implements EntitySubscriberInterface<Probe> {
  // since DI didn't seem to work with this subscriber and it gets instantiated every time an event happens, I need to locally instantiate mqtt to keep it tidy
  listenTo() {
    return Probe;
  }
  async afterInsert(event: InsertEvent<Probe>) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "probe",
      JSON.stringify(new MqttEvent("insert", event.entity)),
    );

    mqtt.close();
  }
  async afterUpdate(event: UpdateEvent<Probe>) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "probe",
      JSON.stringify(new MqttEvent("update", event.entity)),
    );
    mqtt.close();
  }
  async afterRemove(event: any) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "probe",
      JSON.stringify(new MqttEvent("remove", event.entityId)),
    );
    mqtt.close();
  }
}
