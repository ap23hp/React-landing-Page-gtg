import { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

const statsData = [
  { value: 84, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 78, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 89, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 90, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];

export default function StatsGreen() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    let animationFrameIds = [];

    const animateCounters = () => {
      setCounts(statsData.map(() => 0)); // RESET first

      statsData.forEach((stat, index) => {
        let current = 0;
        const increment = Math.max(1, Math.floor(stat.value / 60));

        const update = () => {
          current += increment;

          setCounts((prev) => {
            const updated = [...prev];
            updated[index] =
              current >= stat.value ? stat.value : current;
            return updated;
          });

          if (current < stat.value) {
            animationFrameIds[index] = requestAnimationFrame(update);
          }
        };

        update();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
        } else {
          // cleanup when leaving viewport
          animationFrameIds.forEach((id) => cancelAnimationFrame(id));
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section className="StatsGreen-section" ref={sectionRef}>
      <div className="StatsGreen-container">
        {statsData.map((stat, index) => (
          <div key={index} className="StatsGreen-box">
            <span className="StatsGreen-number">{counts[index]}</span>
            <span className="StatsGreen-percent">%</span>
            <p className="StatsGreen-text">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
