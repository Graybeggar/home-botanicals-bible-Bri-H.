import React from "react";

export default function CareTips({ careTips }) {
  return (
    <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h4>📚 Care Tips</h4>

      <h5>🌓 Light Levels</h5>
      {Array.isArray(careTips.light) ? (
        <ul>
          {careTips.light.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      ) : (
        <p>{careTips.light}</p>
      )}

      <h5>💧 Watering Techniques</h5>
      <p>{careTips.watering}</p>

      {careTips.soil && (
        <>
          <h5>🌱 Soil</h5>
          <p>{careTips.soil}</p>
        </>
      )}

      <h5>🐜 Pest Control</h5>
      <p>{careTips.pests}</p>

      <h5>🪴 Propagation</h5>
      <p>{careTips.propagation}</p>
    </div>
  );
}