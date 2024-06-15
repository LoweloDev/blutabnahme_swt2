import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { MockFactory } from "../src/shared/services/mock-factory";
import { Probe } from "../src/probe/entities/probe.entity";
// import { ProbeService } from "../src/probe/probe.service";

describe("ProbeController (e2e)", () => {
  let app: INestApplication;
  // let probeService: ProbeService; // Instance of ProbeService

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // probeService = await moduleFixture.get<ProbeService>(ProbeService); // Get ProbeService instance
    await app.init();
  });

  afterEach(async () => {
    await app.close(); // Close the application after each test
  });

  // Test case for creating a probe
  it("POST /probe (create)", async () => {
    // const newProbe = {
    //   material: "Test Material",
    //   laborauftrag_id: "123e4567-e89b-12d3-a456-426614174000", // Replace with a valid Blutabnahme ID
    // };

    const newProbe = MockFactory.mock(Probe) as Probe;

    console.log(newProbe);

    const response = await request(app.getHttpServer())
      .post("/probe")
      .send(newProbe as Probe)
      .expect(201); // Expect created status code (201)

    expect(response.body).toHaveProperty("id"); // Check for generated ID
    expect(response.body.material).toEqual(newProbe.material);
    expect(response.body.laborauftrag_id).toEqual(newProbe.laborauftrag_id);
  });

  // Test case for getting all probes
  it("GET /probe (findAll)", async () => {
    const response = await request(app.getHttpServer())
      .get("/probe")
      .expect(200); // Expect OK status code (200)

    expect(response.body).toBeInstanceOf(Array); // Expect an array of probes
  });

  // Test case for getting a single probe by ID
  it("GET /probe/:id (findOne)", async () => {
    // Assuming a probe is already created with ID '1' (replace with actual ID)
    const probeId = "1";

    const response = await request(app.getHttpServer())
      .get(`/probe/${probeId}`)
      .expect(200); // Expect OK status code (200)

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toEqual(probeId);
  });

  // Test case for updating a probe
  it("PATCH /probe/:id (update)", async () => {
    // Assuming a probe is already created with ID '1' (replace with actual ID)
    const probeId = "1";
    const updates = {
      material: "Updated Material",
    };

    const response = await request(app.getHttpServer())
      .patch(`/probe/${probeId}`)
      .send(updates)
      .expect(200); // Expect OK status code (200)

    expect(response.body.id).toEqual(probeId);
    expect(response.body.material).toEqual(updates.material);
  });

  // Test case for deleting a probe
  it("DELETE /probe/:id (remove)", async () => {
    // Assuming a probe is already created with ID '1' (replace with actual ID)
    const probeId = "1";

    const response = await request(app.getHttpServer())
      .delete(`/probe/${probeId}`)
      .expect(200); // Expect OK status code (200)

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toEqual(probeId);
  });
});
