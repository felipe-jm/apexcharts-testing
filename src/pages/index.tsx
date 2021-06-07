import { BarChart } from "components/BarChart";
import { LineChart } from "components/LineChart";
import { LineAreaChart } from "components/MixedCharts/LineAreaChart";
import { LineAreaColumnChart } from "components/MixedCharts/LineAreaColumnChart";

export default function Home() {
  return (
    <>
      <BarChart />
      <LineChart />
      <LineAreaChart />
      <LineAreaColumnChart />
    </>
  );
}
