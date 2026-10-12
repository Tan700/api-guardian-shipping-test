import { afterEach, describe, expect, it, vi } from "vitest";
import { getShipmentTracking } from "./shipping-client-sample";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("getShipmentTracking", () => {
  it("uses the updated delivery_date field", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        shipment_id: "S102",
        delivery_date: "2026-10-15"
      })
    });

    vi.stubGlobal("fetch", mockFetch);

    const result = await getShipmentTracking(
      "https://carrier.example",
      "S102"
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://carrier.example/shipments/S102/tracking"
    );

    expect(result).toEqual({
      id: "S102",
      deliveryDate: "2026-10-15"
    });
  });
});
