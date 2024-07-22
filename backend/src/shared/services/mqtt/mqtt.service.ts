import { Injectable } from "@nestjs/common";
import * as mqtt from "mqtt";

@Injectable()
export class MqttService {
  private client: mqtt.MqttClient;

  // need to use constructor cause lifecylce methods dont work when DI doesnt work
  constructor() {
    console.log("MqttService initializing...");
    this.connectToBroker();
  }

  close() {
    if (this.client) {
      console.log("MqttService destroying...");
      this.client.end();
    }
  }

  private connectToBroker() {
    const brokerUrl = "mqtt://localhost:1883";
    console.log(`Connecting to MQTT broker at ${brokerUrl}...`);

    this.client = mqtt.connect(brokerUrl);

    this.client.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    this.client.on("error", (error) => {
      console.error("MQTT error:", error);
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

  publish(topic: string, message: string): void {
    if (this.client) {
      console.log(`Publishing message to topic ${topic}: ${message}`);
      this.client.publish(topic, message, (error) => {
        if (error) {
          console.error("Publish error:", error);
        }
      });
    } else {
      console.error("MQTT client is not connected");
    }
  }

  subscribe(topic: string): void {
    if (this.client) {
      console.log(`Subscribing to topic ${topic}`);
      this.client.subscribe(topic, (error) => {
        if (error) {
          console.error("Subscribe error:", error);
        }
      });

      this.client.on("message", (topic, message) => {
        console.log(
          `Received message: ${message.toString()} on topic: ${topic}`,
        );
      });
    } else {
      console.error("MQTT client is not connected");
    }
  }
}
