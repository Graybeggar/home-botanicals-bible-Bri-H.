const plants = [
  {
    id: 1,
    name: "Snake Plant (Dracaena trifasciata)",
    image: "/images/snake-plant.jpg",
    description: "Known for their resilience, air-purifying abilities, and low-maintenance nature.",
    light: "Low",
    size: "Large",
    petSafe: false,
    wateringIntervalDays: 14,
    careTips: {
      light: [
        "Snake plants thrive in low to bright indirect light.",
        "Avoid direct sunlight to prevent leaf burn.",
        "Can tolerate fluorescent light—good for offices.",
        "Put it in an east-facing window or near a south- or west-facing window.",
      ],
      watering: "Snake plants should be watered sparingly, allowing the soil to dry out completely between waterings to prevent root rot. A general rule of thumb is to water once the soil is dry, which may be every few weeks in spring and summer, and potentially once a month in the fall and winter. It's better to underwater than overwater a snake plant. .",
      soil: "A mix that includes perlite, coco coir, and sand to improve drainage.",
      pests: "Watch for mealybugs. Wipe leaves with neem oil.",
      propagation: "Leaf cuttings are a common method, where you cut a healthy leaf into sections and either plant them directly in soil or let them root in water before planting.",
    },
  },
  {
    id: 2,
    name: "Spider Plant (Chlorophytum comosum)",
    image: "/images/spider-plant.jpg",
    description: "Fast-growing, tolerant of neglect, and able to thrive in nearly any type of condition.",
    light: "Bright",
    size: "Small",
    petSafe: true,
    wateringIntervalDays: 7,
    careTips: {
      light: [
        "Spider plants thrive in bright, indirect light.",
        "Avoid direct sunlight, which can scorch the leaves.",
        "If you don't have an ideal location for your spider plant, consider using a grow light.",
      ],
      watering: "Spider plants should be watered when the top inch or so of the soil feels dry to the touch, typically about once a week during the growing season (spring to late summer) and less frequently in winter. It's better to underwater than overwater, as spider plants can tolerate dry spells better than soggy conditions. ",
      soil: "A mix of potting soil, perlite, and peat moss",
      pests: "Common pests include spider mites. Use insecticidal soap.",
      propagation: "Spider plant propagation is easiest by cutting off the plantlets (spiderettes) from the main plant and rooting them in water or soil.",
    },
  },
];

export default plants;