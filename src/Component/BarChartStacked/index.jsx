import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";

export default function BarChartStacked({ data, className }) {
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      stackOffset="sign"
      margin={{
        left: -30,
      }}
      barSize={7}
      className={className}
    >
      <XAxis dataKey="month" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{
          fontSize: 12,
          padding: `2px 5px 2px 5px`,
          backgroundColor: `rgb(255 255 255 / 0.9)`,
          color: "black",
          textAlign: "center",
        }}
      />
      <Bar dataKey="earning" fill="#0BB885" stackId="stack" radius={[10, 10, 0, 0]} />
      <Bar dataKey="expense" fill="#FF9F43" stackId="stack" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}
