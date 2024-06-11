import {GenericMessage} from "./generic-message";

export interface GenericSuccess extends GenericMessage {
  color: string;
  callback: Function;
}
