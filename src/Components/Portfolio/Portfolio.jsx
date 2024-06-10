import "./Portfolio.css";
import Project_6 from "../../assets/5-500x500.jpg";
import Project_5 from "../../assets/9-500x500.jpg";
import Project_4 from "../../assets/Project_4-500x500.jpg";
import Project_3 from "../../assets/Project_3-500x500.jpg";
import Project_2 from "../../assets/Project_2-500x500.jpg";
import Project_1 from "../../assets/Project_1-500x500.jpg";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    category: "Business Advice",
    title: "Financial Regulation",
    description: "Business Advice",
    image: Project_4,
  },
  {
    id: 2,
    category: "Business Advice",
    title: "Business Boosting",
    description: "Business Advice",
    image: Project_3,
  },
  {
    id: 3,
    category: "Business Advice",
    title: "Insurance Consulting",
    description: "Business Advice",
    image: Project_2,
  },
  {
    id: 4,
    category: "Business Advice",
    title: "Market Research",
    description: "Business Advice",
    image: Project_1,
  },
  {
    id: 5,
    category: "Consulting",
    title: "Support Technology",
    description: "Consulting",
    image: Project_5,
  },
  {
    id: 6,
    category: "Consulting",
    title: "HR Recruiting",
    description: "Consulting",
    image: Project_6,
  },
  // Add more items as needed
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);
  return (
    <div className="container">
      <div className="portfolio">
        <h5 className="sub-text">Our Recent Work</h5>
        <h4>Effective Case Studies.</h4>
        <div className="filter-buttons">
          {["All", "Business Advice", "Consulting", "Finance"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="portfolio-items">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="overlay"></div>
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <p className="portfolio-description">{item.description}</p>
                <h3 className="portfolio-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
