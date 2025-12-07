import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

type Row = {
  traditional: string;
  gestalty: string;
};

interface MiniComparisonChartProps {
  rows: Row[];
}

const extractValue = (text: string): number => {
  const match = text.match(/(\d+)%/);
  return match ? parseInt(match[1], 10) : 0;
};

export default function MiniComparisonChart({ rows }: MiniComparisonChartProps) {
  const traditionalValues = rows.map((row) => extractValue(row.traditional)).filter((v) => v > 0);
  const gestaltyValues = rows.map((row) => extractValue(row.gestalty)).filter((v) => v > 0);

  const traditionalMain = traditionalValues.length ? Math.max(...traditionalValues) : 0;
  const gestaltyMain = gestaltyValues.length ? Math.max(...gestaltyValues) : 0;

  const labels = ["Traditional", "Gestalty"];

  const data = {
    labels,
    datasets: [
      {
        label: "Gestalty",
        data: [traditionalMain, gestaltyMain],
        borderColor: "#19254c",
        backgroundColor: "rgba(25, 37, 76, 0.18)",
        fill: "origin",
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#19254c",
        pointBorderColor: "#19254c",
        pointHoverBackgroundColor: "#11192f",
        pointHoverBorderColor: "#11192f",
        shadowOffsetY: 2,
      },
      {
        label: "Traditional",
        data: [traditionalMain, traditionalMain],
        borderColor: "#cfd4e3",
        backgroundColor: "rgba(207, 212, 227, 0.2)",
        fill: false,
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: "#cfd4e3",
        borderDash: [6, 6],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(25,37,76,0.95)",
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => `${context.label}: ${context.parsed.y}% progress`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, color: "#6a7188" },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "rgba(224,224,224,0.4)" },
        ticks: {
          stepSize: 20,
          font: { size: 11 },
          color: "#6a7188",
          callback: (value: any) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-primary/80">
        <span>Wave comparison</span>
        <div className="flex items-center gap-3 text-primary">
          <span className="rounded px-2 py-1 text-[11px] font-semibold bg-primary/5 border border-primary/20">
            Gestalty {gestaltyMain}%
          </span>
          <span className="rounded px-2 py-1 text-[11px] font-semibold bg-border/30 text-primary/80 border border-border/70">
            Traditional {traditionalMain}%
          </span>
        </div>
      </div>
      <div className="h-44 sm:h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
