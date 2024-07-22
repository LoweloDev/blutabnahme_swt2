import mqtt from "mqtt";
import {Injectable} from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)
export class MqttService {
  private client: mqtt.MqttClient;
  private readonly connectionPromise: Promise<void>;
  private connectionResolve: () => void;
  private connectionReject: (error: Error) => void;

  constructor() {
    console.log("MqttService initializing...");
    this.connectionPromise = new Promise((resolve, reject) => {
      this.connectionResolve = resolve;
      this.connectionReject = reject;
    });
    this.connectToBroker();
  }

  public getClient(): mqtt.MqttClient {
    return this.client;
  }

  close() {
    if (this.client) {
      console.log("MqttService closing...");
      this.client.end();
    }
  }
  private readonly brokerUrl = 'ws://localhost:9001'; // WebSocket URL, replace if needed

  private connectToBroker() {
    console.log(`Connecting to MQTT broker at ${this.brokerUrl}...`);

    this.client = mqtt.connect(this.brokerUrl, {
      protocol: 'ws',
    });

    this.client.on("connect", () => {
      console.log("Connected to MQTT broker");
      this.connectionResolve();
    });

    this.client.on("error", (error) => {
      console.error("MQTT error:", error);
      this.connectionReject(error);
    });

    this.client.on("close", () => {
      console.log("MQTT connection closed");
    });

    this.client.on("offline", () => {
      console.log("MQTT client offline");
    });

    this.client.on("reconnect", () => {
      console.log("MQTT client reconnecting");
    });
  }

  async publish(topic: string, message: string): Promise<void> {
    try {
      await this.connectionPromise;
      if (this.client && this.client.connected) {
        console.log(`Publishing message to topic ${topic}: ${message}`);
        this.client.publish(topic, message, (error) => {
          if (error) {
            console.error("Publish error:", error);
          }
        });
      } else {
        console.error("MQTT client is not connected");
      }
    } catch (error) {
      console.error("Error while waiting for MQTT connection:", error);
    }
  }

  async subscribe(topic: string): Promise<void> {
    try {
      await this.connectionPromise;
      if (this.client && this.client.connected) {
        console.log(`Subscribing to topic ${topic}`);

        // Unsubscribe from the topic before subscribing to prevent multiple subscriptions
        this.client.unsubscribe(topic, (err) => {
          if (err) {
            console.error("Unsubscribe error:", err);
          } else {
            this.client.subscribe(topic, (error) => {
              if (error) {
                console.error("Subscribe error:", error);
              }
            });
          }
        });
      } else {
        console.error("MQTT client is not connected");
      }
    } catch (error) {
      console.error("Error while waiting for MQTT connection:", error);
    }

    this.getClient().handleMessage = (packet, callback) => {
      console.log("Received message:", packet.payload.toString());
      callback();
    };
  }
}
