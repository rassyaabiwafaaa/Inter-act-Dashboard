import { BarChart, Bar, Tooltip } from "recharts";

export default function BarC({ data, className }) {
  return (
    <BarChart width={150} height={80} data={data} barSize={6} className={className}>
      <Tooltip
        contentStyle={{
          fontSize: 12,
          padding: `2px 5px 2px 5px`,
          backgroundColor: `rgb(255 255 255 / 0.9)`,
          color: "black",
          textAlign: "center",
        }}
      />
      <Bar dataKey="orders" fill="#FF814A" background={{ fill: "#2E4B85", radius: 10 }} radius={10} />
      <div className="px-2"></div>
    </BarChart>
  );
}
