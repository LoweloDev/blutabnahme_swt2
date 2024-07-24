import { Injectable } from "@nestjs/common";
import * as mqtt from "mqtt";

@Injectable()
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

  private connectToBroker() {
    const mqttHost = process.env.MQTT_HOST || "localhost";
    const mqttPort = process.env.MQTT_PORT || 1883;

    console.log(`Connecting to MQTT broker at ${mqttHost}:${mqttPort}...`);

    const brokerUrl = `mqtt://${mqttHost}:${mqttPort}`;
    this.client = mqtt.connect(brokerUrl);
    // const brokerUrl = "mqtt://localhost:1883";
    console.log(`Connecting to MQTT broker at ${brokerUrl}...`);

    this.client = mqtt.connect(brokerUrl);

    this.client.on("connect", () => {
      console.log("Connected to MQTT broker");
      this.connectionResolve(); // Resolve the connection promise
    });

    this.client.on("error", (error) => {
      console.error("MQTT error:", error);
      this.connectionReject(error); // Reject the connection promise
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
      await this.connectionPromise; // Wait for connection to be established
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
      await this.connectionPromise; // Wait for connection to be established
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
