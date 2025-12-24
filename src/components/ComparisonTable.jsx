import "../styles/comparison.css";

import gtg from "../assets/why1.png";
import arose from "../assets/why2.png";
import bella from "../assets/why3.png";
import daisies from "../assets/why4.png";

import tick from "../assets/tickTable.svg";
import cross from "../assets/crossTable.svg";

export default function ComparisonTable() {
  return (
    <section className="ComparisonTable">
      {/* divider */}
      <div className="ComparisonTable-divider">---</div>

      <h2 className="ComparisonTable-title">Why GTG is the #1 Choice</h2>

      <div className="ComparisonTable-wrapper">
        <table className="ComparisonTable-table">
          <thead>
            <tr className="ComparisonTable-images">
              <th>Qualities</th>

              <th className="highlight">
                <img src={gtg} alt="GTG" />
                <span>GTG</span>
              </th>

              <th>
                <img src={arose} alt="Arose" />
                <span>Arose</span>
              </th>

              <th>
                <img src={bella} alt="Bella" />
                <span>Bella</span>
              </th>

              <th>
                <img src={daisies} alt="Daisies" />
                <span>Daisies</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Potency Concentration</td>
              <td className="highlight">10x</td>
              <td>1x</td>
              <td>1x</td>
              <td>10x</td>
            </tr>

            <tr>
              <td>Longevity</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={tick} alt="Yes" /></td>
            </tr>

            <tr>
              <td>Sillage</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
            </tr>

            <tr>
              <td>Bottle Design Score</td>
              <td className="highlight">9</td>
              <td>5</td>
              <td>6</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Blend and Harmony</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
            </tr>

            <tr>
              <td>Skin Compatibility</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
            </tr>

            <tr>
              <td>Scent Profile</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={tick} alt="Yes" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={cross} alt="No" /></td>
            </tr>

            <tr>
              <td>Price vs. Quality</td>
              <td className="highlight">
                <img src={tick} alt="Yes" />
              </td>
              <td><img src={tick} alt="Yes" /></td>
              <td><img src={cross} alt="No" /></td>
              <td><img src={tick} alt="Yes" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <a href="#" className="ComparisonTable-cta">
        Try It Risk-Free
      </a>
    </section>
  );
}
