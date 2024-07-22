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

  test("publish and subscribe", async () => {
    const topic = "test";
    const message = "test";
    await service.publish(topic, message);
    await service.subscribe("test");
    await service.publish(topic, message);

    service.close();
  });
});
