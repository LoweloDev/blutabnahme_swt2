import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import { Blutabnahme } from "./entities/blutabnahme.entity";

@EventSubscriber()
export class BlutabnahmeSubscriber
  implements EntitySubscriberInterface<Blutabnahme>
{
  /**
   * Indicates that this subscriber only listen to User events.
   */
  listenTo() {
    return Blutabnahme;
  }

  /**
   * Called after entity is inserted.
   */
  afterInsert(event: InsertEvent<Blutabnahme>) {
    console.log(`Inserted user with id ${event.entity.id}`);
  }

  /**
   * Called after entity is updated.
   */
  afterUpdate(event: UpdateEvent<Blutabnahme>) {
    console.log(`Updated user with id ${event.entity.id}`);
  }

  /**
   * Called after entity is removed.
   */
  afterRemove(event: any) {
    console.log(`Removed user with id ${event.entityId}`);
  }
}
