import * as request from "supertest";
import app from "../app";

describe("GET /videos", () => {
    it("Should return a success http.status from a API Request", async () => {
      const result = await request(app).get("/videos");
      expect(result.statusCode).toEqual(200);
    });
  });


// arrange //act //assert 