import "./styles.css";
import { birthYearData } from "./data/birthYear";
import Histogram from "./components/histogram";
export default function App() {
  const aggregateYears = (item) => {
    return item.reduce((accumulator, currentItem) => {
      if (accumulator[currentItem.birthYear]) {
        accumulator[currentItem.birthYear] += 1;
      } else {
        accumulator[currentItem.birthYear] = 1;
      }
      return accumulator;
    }, {});
  };

  //console.log(birthYearData);
  const aggregatedData = aggregateYears(birthYearData);

  const histogramData = Object.entries(aggregatedData).map(([year, count]) => ({
    year: Number(year),
    count,
  }));

  return (
    <div className="App">
      <h1>Birth Year Histogram</h1>
      <Histogram data={histogramData} />
    </div>
  );
}
