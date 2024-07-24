import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import { Blutabnahme } from "./entities/blutabnahme.entity";
import { MqttService } from "../../shared/services/mqtt/mqtt.service";
import { MqttEvent } from "../../shared/services/mqtt/mqtt-event";

@EventSubscriber()
export class BlutabnahmeSubscriber
  implements EntitySubscriberInterface<Blutabnahme>
{
  listenTo() {
    return Blutabnahme;
  }

  async afterInsert(event: InsertEvent<Blutabnahme>) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "blutabnahme",
      JSON.stringify(new MqttEvent("insert", event.entity)),
    );

    mqtt.close();
  }

  async afterUpdate(event: UpdateEvent<Blutabnahme>) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "blutabnahme",
      JSON.stringify(new MqttEvent("update", event.entity)),
    );
    mqtt.close();
  }

  async afterRemove(event: any) {
    const mqtt = new MqttService();
    await mqtt.publish(
      "blutabnahme",
      JSON.stringify(new MqttEvent("remove", event.entityId)),
    );
    mqtt.close();
  }
}
