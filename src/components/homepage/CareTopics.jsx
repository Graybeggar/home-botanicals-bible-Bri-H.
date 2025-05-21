function CareTopics() {
  const topics = ['Light Levels', 'Watering Techniques', 'Pest Control', 'Propagation'];

  return (
    <section>
      <h2>Explore Plant Care Topics</h2>
      <ul>
        {topics.map((topic, idx) => (
          <li key={idx}>{topic}</li>
        ))}
      </ul>
    </section>
  );
}

export default CareTopics;