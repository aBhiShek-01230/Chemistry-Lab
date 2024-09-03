const Experiments = [
  {
    id: 1,
    title: "HCl with Zinc",
    reactants: ["HCl", "Zn"],
    products: ["ZnCl2", "H2"],
    observation: "Effervescence observed due to the release of hydrogen gas.",
    reactionEquation: "Zn (s) + 2HCl (aq) → ZnCl2 (aq) + H2 (g)",
    safetyPrecautions: [
      "1.Wear safety goggles and gloves.",
      "2.Conduct the experiment in a well-ventilated area."
    ],
    procedure: [
      "1.Add a piece of zinc metal to a test tube.",
      "2.Carefully add dilute hydrochloric acid to the test tube.",
      "3.Observe the reaction and the release of hydrogen gas bubbles."
    ],
    equipment: ["Test tube", "Dropper", "Zinc strip", "Dilute HCl solution", "Test tube holder"]
  },
  {
    id: 2,
    title: "HCl with Sodium Carbonate",
    reactants: ["HCl", "Na2CO3"],
    products: ["NaCl", "CO2", "H2O"],
    observation: "Effervescence observed due to the release of carbon dioxide gas.",
    reactionEquation: "2HCl (aq) + Na2CO3 (s) → 2NaCl (aq) + CO2 (g) + H2O (l)",
    safetyPrecautions: [
      "Wear safety goggles and gloves.",
      "Conduct the experiment in a well-ventilated area."
    ],
    procedure: [
      "Add solid sodium carbonate to a test tube.",
      "Carefully add dilute hydrochloric acid to the test tube.",
      "Observe the reaction and the release of carbon dioxide gas bubbles."
    ],
    equipment: ["Test tube", "Spatula", "Solid sodium carbonate", "Dilute HCl solution", "Test tube holder"]
  },
  {
    id: 3,
    title: "NaOH with Zinc",
    reactants: ["NaOH", "Zn"],
    products: ["Na2[Zn(OH)4]", "H2"],
    observation: "Reaction occurs at elevated temperatures, releasing hydrogen gas.",
    reactionEquation: "Zn (s) + 2NaOH (aq) + 2H2O (l) → Na2[Zn(OH)4] (aq) + H2 (g)",
    safetyPrecautions: [
      "Wear safety goggles and gloves.",
      "Handle NaOH with care, as it is a strong base."
    ],
    procedure: [
      "Add a piece of zinc metal to a test tube.",
      "Carefully add sodium hydroxide solution to the test tube.",
      "Heat the mixture if necessary and observe the release of hydrogen gas."
    ],
    equipment: ["Test tube", "Zinc strip", "NaOH solution", "Test tube holder", "Bunsen burner (if heating is needed)"]
  }
];

 export default Experiments;
// // Example of how to access an experiment's details
// console.log(Experiments[0].title); // Output: "HCl with Zinc"
// console.log(Experiments[1].equipment); // Output: ["Test tube", "Spatula", "Solid sodium carbonate", "Dilute HCl solution", "Test tube holder"]
