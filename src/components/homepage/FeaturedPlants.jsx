function FeaturedPlants() {
  const plants = [
    { name: 'Snake Plant', description: 'Low light | Safe'},
    { name: 'Spider Plant', description: 'Bright light | Pet-safe'},
    { name: 'Pothos', description: 'Easy care'}
  ];

  return (
    <section >
      <h2>Featured Plants</h2>
      <div>
        {plants.map((plant, idx) => (
          <div>
            <h3 className="text-md font-bold">{plant.name}</h3>
            <p>{plant.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPlants;