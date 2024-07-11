import {GenericMessage} from "./generic-message";

export interface GenericError extends GenericMessage {
    callback?: Function;
    cause?: string;
    object?: any;
}

