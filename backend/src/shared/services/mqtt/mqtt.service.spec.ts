import { Test, TestingModule } from "@nestjs/testing";
import { MqttService } from "./mqtt.service";

describe("MqttService", () => {
  let service: MqttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MqttService],
    }).compile();

    service = module.get<MqttService>(MqttService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  test("publish and subscribe", () => {
    const topic = "test";
    const message = "test";
    service.publish(topic, message);
    service.subscribe("test");
    service.publish(topic, message);

    service.close();
  });
});
