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

  // Unique chart data for each area with distinct progression patterns
  const getChartData = (areaName: string) => {
    const chartDataMap: Record<string, { before: number[]; after: number[]; tension?: number }> = {
      "Planning": {
        // Steady decline before, quick improvement then steady after
        before: [100, 68, 38, 25],
        after: [100, 82, 90, 94],
        tension: 0.5,
      },
      "Self-Control": {
        // Rapid decline before, gradual but consistent improvement after
        before: [100, 72, 48, 30],
        after: [100, 75, 84, 91],
        tension: 0.3,
      },
      "Strategy": {
        // Moderate decline before, exponential improvement after
        before: [100, 65, 42, 28],
        after: [100, 88, 94, 96],
        tension: 0.6,
      },
      "Progress": {
        // Fluctuating decline before, linear steady growth after
        before: [100, 70, 45, 32],
        after: [100, 79, 87, 93],
        tension: 0.4,
      },
      "Personalization": {
        // Steep initial drop, then slow decline before; rapid early gains after
        before: [100, 60, 35, 22],
        after: [100, 92, 95, 97],
        tension: 0.55,
      },
      "Support": {
        // Gradual decline before, steady improvement with acceleration after
        before: [100, 75, 50, 35],
        after: [100, 83, 88, 94],
        tension: 0.45,
      },
    };

    // Default data if area not found
    const defaultData = {
      before: [100, 70, 45, 35],
      after: [100, 88, 90, 93],
      tension: 0.4,
    };

    return chartDataMap[areaName] || defaultData;
  };

  const chartData = getChartData(area);
  const customTension = chartData.tension || 0.4;

  const data = {
    labels: ["Start", "Week 1", "Month 1", "Month 3"],
    datasets: [
      {
        label: "Before",
        data: chartData.before,
        borderColor: "#6a7188",
        backgroundColor: "rgba(106, 113, 136, 0.05)",
        borderWidth: 2.5,
        fill: false,
        tension: customTension,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#6a7188",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
      {
        label: "With Gestalty",
        data: chartData.after,
        borderColor: "#fbc10d",
        backgroundColor: "rgba(251, 193, 13, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: customTension,
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
