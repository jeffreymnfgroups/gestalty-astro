import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface TransformationChartProps {
  area: string;
}

export default function TransformationChart({ area }: TransformationChartProps) {
  const chartRef = useRef<ChartJS<"line">>(null);

  const data = {
    labels: ["Start", "Week 1", "Month 1", "Month 3"],
    datasets: [
      {
        label: "Before",
        data: [100, 75, 50, 35],
        borderColor: "#6a7188",
        backgroundColor: "rgba(106, 113, 136, 0.05)",
        borderWidth: 2.5,
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#6a7188",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
      {
        label: "With Gestalty",
        data: [100, 95, 88, 92],
        borderColor: "#fbc10d",
        backgroundColor: "rgba(251, 193, 13, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#fbc10d",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(25, 37, 76, 0.95)",
        padding: 12,
        titleFont: {
          family: "'Satoshi', system-ui, sans-serif",
          size: 12,
          weight: "600" as const,
        },
        bodyFont: {
          family: "'Satoshi', system-ui, sans-serif",
          size: 11,
        },
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(224, 224, 224, 0.3)",
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Satoshi', system-ui, sans-serif",
            size: 10,
          },
          color: "#6a7188",
          padding: 8,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: true,
          color: "rgba(224, 224, 224, 0.3)",
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Satoshi', system-ui, sans-serif",
            size: 10,
          },
          color: "#6a7188",
          padding: 8,
          callback: function (value: any) {
            return value + "%";
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  return (
    <div className="h-full w-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}
