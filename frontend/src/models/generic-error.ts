import {GenericMessage} from "./generic-message";

export interface GenericError extends GenericMessage {
    cause?: string;
    object?: any;
}

