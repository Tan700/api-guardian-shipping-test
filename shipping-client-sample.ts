// Trigger API Guardian CI validation.

export async function getShipmentTracking(
  baseUrl: string,
  shipmentId: string
) {
  const endpoint =
    `${baseUrl}/shipments/${shipmentId}/tracking`;

  const response = await fetch(endpoint);
  const tracking = await response.json();

  return {
    id: tracking.shipment_id,
    deliveryDate: tracking.delivery_date
  };
}
