// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [dietPlan, setDietPlan] = useState([]);
  const [aiPlan, setAiPlan] = useState("");
  const [goal, setGoal] = useState("general wellness");

  useEffect(() => {
    // Static fallback plan
    const plan = [
      { meal: "Breakfast", items: ["Oatmeal with berries", "Green tea"] },
      { meal: "Lunch", items: ["Grilled chicken salad", "Whole grain bread"] },
      { meal: "Snack", items: ["Apple slices", "Handful of almonds"] },
      { meal: "Dinner", items: ["Steamed fish", "Quinoa", "Mixed vegetables"] },
    ];
    setDietPlan(plan);
  }, []);

  const generateAiPlan = () => {
    // Dummy AI plan (replace with backend Groq call later)
    const fakePlan = `
    Goal: ${goal}

    Breakfast: Smoothie with spinach, banana, and protein powder
    Lunch: Brown rice with lentils and mixed veggies
    Snack: Greek yogurt with walnuts
    Dinner: Grilled salmon with quinoa and broccoli
    `;
    setAiPlan(fakePlan);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🥗 Healthy Diet Planner</h1>

      {/* Static Plan */}
      <h2>Static Plan</h2>
      {dietPlan.map((entry, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{entry.meal}</h3>
          <ul>
            {entry.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* AI Plan */}
      <h2>AI‑Generated Plan</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal (e.g., weight loss, muscle gain)"
          style={{ padding: "8px", width: "300px" }}
        />
        <button
          onClick={generateAiPlan}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Generate Plan
        </button>
      </div>
      {aiPlan && (
        <div
          style={{
            whiteSpace: "pre-wrap",
            background: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          {aiPlan}
        </div>
      )}
    </div>
  );
}

export default App;
