import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement
);

interface ComparisonChartProps {
  rows: Array<{
    traditional: string;
    gestalty: string;
  }>;
}

export default function ComparisonChart({ rows }: ComparisonChartProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Extract numeric values from text (e.g., "8%" -> 8, "68%" -> 68)
  const extractValue = (text: string): number => {
    const match = text.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  };

  // Prepare data for charts
  const traditionalValues = rows.map((row) => extractValue(row.traditional));
  const gestaltyValues = rows.map((row) => extractValue(row.gestalty));
  const totalTraditional = traditionalValues.reduce((a, b) => a + b, 0);
  const totalGestalty = gestaltyValues.reduce((a, b) => a + b, 0);
  const avgTraditional = totalTraditional / rows.length;
  const avgGestalty = totalGestalty / rows.length;

  // Professional vibrant colors matching brand palette
  // Gestalty brand colors - tertiary (#19254c) with vibrant variations
  const gestaltyColor = "rgba(25, 37, 76, 0.85)"; // Vibrant Gestalty tertiary
  const gestaltyColorHover = "rgba(25, 37, 76, 1)"; // Solid on hover
  const gestaltyColorAccent = "#19254c"; // Solid Gestalty brand color
  const gestaltyGradient = "rgba(25, 37, 76, 0.95)"; // For depth
  
  // Traditional method - warm neutral tone
  const traditionalColor = "rgba(106, 113, 136, 0.7)"; // grayBlue more visible
  const traditionalColorHover = "rgba(106, 113, 136, 0.9)"; // On hover
  const traditionalColorSolid = "#6a7188"; // Solid grayBlue
  
  // Secondary accent color (yellow/gold) for highlights
  const accentColor = "rgba(251, 193, 13, 0.2)"; // Secondary yellow subtle
  const accentColorSolid = "#fbc10d"; // Solid secondary

  // Bar chart data for detailed comparison with vibrant colors
  const barData = {
    labels: rows.map((_, i) => `Metric ${i + 1}`),
    datasets: [
      {
        label: "Traditional",
        data: traditionalValues,
        backgroundColor: traditionalColor,
        borderColor: traditionalColorSolid,
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: traditionalColorHover,
        hoverBorderColor: traditionalColorSolid,
        hoverBorderWidth: 3,
      },
      {
        label: "Gestalty",
        data: gestaltyValues,
        backgroundColor: gestaltyColor,
        borderColor: gestaltyColorAccent,
        borderWidth: 2.5,
        borderRadius: 8,
        hoverBackgroundColor: gestaltyColorHover,
        hoverBorderColor: gestaltyColorAccent,
        hoverBorderWidth: 4,
      },
    ],
  };

  // Doughnut chart data for overall impact with vibrant colors
  const doughnutData = {
    labels: ["Traditional", "Gestalty"],
    datasets: [
      {
        data: [totalTraditional, totalGestalty],
        backgroundColor: [traditionalColor, gestaltyColor],
        borderColor: [traditionalColorSolid, gestaltyColorAccent],
        borderWidth: 4,
        hoverBackgroundColor: [
          traditionalColorHover,
          gestaltyColorHover,
        ],
        hoverBorderColor: [
          traditionalColorSolid,
          gestaltyColorAccent,
        ],
        hoverBorderWidth: 5,
        hoverOffset: 12,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(25, 37, 76, 0.98)",
        padding: 14,
        titleFont: {
          size: 13,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 12,
        },
        borderColor: accentColorSolid,
        borderWidth: 3,
        displayColors: true,
        cornerRadius: 10,
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        animation: {
          duration: 200,
        },
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const value = context.parsed.y;
            const label = context.dataset.label;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: {
            size: 11,
          },
          color: "#6a7188",
          callback: function (value: any) {
            return value + "%";
          },
        },
        grid: {
          color: "rgba(224, 224, 224, 0.3)",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 11,
          },
          color: "#6a7188",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(25, 37, 76, 0.98)",
        padding: 14,
        titleFont: {
          size: 13,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 12,
        },
        borderColor: accentColorSolid,
        borderWidth: 3,
        displayColors: true,
        cornerRadius: 10,
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        animation: {
          duration: 200,
        },
        callbacks: {
          title: function (context: any) {
            return context[0].label || "";
          },
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = totalTraditional + totalGestalty;
            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
            return [
              `${label}: ${value}%`,
              `Percentage: ${percentage}% of total`,
            ];
          },
        },
      },
    },
  };

  const improvement = Math.round(
    ((avgGestalty - avgTraditional) / avgTraditional) * 100
  );

  return (
    <div className="w-full font-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Detailed Comparison */}
        <div
          className={`bg-light rounded-lg border transition-all duration-300 p-5 ${
            hoveredCard === 1
              ? "border-tertiary shadow-xl scale-[1.02] bg-white"
              : "border-border hover:border-tertiary/50 hover:shadow-lg"
          }`}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="mb-4">
            <h3
              className={`font-secondary text-lg font-medium mb-2 transition-colors duration-300 ${
                hoveredCard === 1 ? "text-tertiary" : "text-text-dark"
              }`}
            >
              Detailed Performance Comparison
            </h3>
            <p className="text-sm text-text font-primary leading-relaxed">
              Side-by-side analysis showing how Gestalty outperforms traditional
              methods across key metrics. Each bar represents measurable
              progress indicators.
            </p>
          </div>
          <div className="h-[280px] mb-4 transform transition-transform duration-300 hover:scale-[1.02]">
            <Bar data={barData} options={barChartOptions} />
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 transition-all duration-300 hover:gap-3">
                <div
                  className="w-3 h-3 rounded transition-all duration-300"
                  style={{ backgroundColor: traditionalColorSolid }}
                ></div>
                <span className="text-xs text-text font-primary">Traditional</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:gap-3">
                <div
                  className={`w-3 h-3 rounded transition-all duration-300 ${
                    hoveredCard === 1 ? "scale-125 shadow-md ring-2 ring-tertiary/30" : ""
                  }`}
                  style={{
                    backgroundColor:
                      hoveredCard === 1 ? gestaltyColorAccent : gestaltyColorAccent,
                  }}
                ></div>
                <span
                  className={`text-xs font-primary font-medium transition-colors duration-300 ${
                    hoveredCard === 1 ? "text-tertiary" : "text-text-dark"
                  }`}
                >
                  Gestalty
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-text font-primary">Avg. Improvement</div>
              <div
                className={`text-sm font-secondary font-medium transition-all duration-300 ${
                  hoveredCard === 1
                    ? "text-tertiary scale-110"
                    : "text-tertiary"
                }`}
              >
                {improvement}%
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Overall Impact */}
        <div
          className={`bg-light rounded-lg border transition-all duration-300 p-5 ${
            hoveredCard === 2
              ? "border-tertiary shadow-xl scale-[1.02] bg-white"
              : "border-border hover:border-tertiary/50 hover:shadow-lg"
          }`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="mb-4">
            <h3
              className={`font-secondary text-lg font-medium mb-2 transition-colors duration-300 ${
                hoveredCard === 2 ? "text-tertiary" : "text-text-dark"
              }`}
            >
              Overall Impact Analysis
            </h3>
            <p className="text-sm text-text font-primary leading-relaxed">
              Cumulative results demonstrate the transformative effect of
              Gestalty's approach. The visualization shows total progress
              achieved through balanced knowledge acquisition.
            </p>
          </div>
          <div className="h-[280px] mb-4 relative transform transition-transform duration-300 hover:scale-[1.02]">
            <Doughnut data={doughnutData} options={doughnutChartOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className={`text-2xl font-secondary font-medium mb-1 transition-all duration-300 ${
                    hoveredCard === 2
                      ? "text-tertiary scale-110"
                      : "text-tertiary"
                  }`}
                >
                  {Math.round(
                    (totalGestalty / (totalTraditional + totalGestalty)) * 100
                  )}
                  %
                </div>
                <div className="text-xs text-text font-primary">
                  Better Results
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="text-text font-primary">Traditional Total:</span>
                <span className="text-text-dark font-primary font-medium">
                  {totalTraditional}%
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="text-text font-primary">Gestalty Total:</span>
                <span
                  className={`font-primary font-medium transition-all duration-300 ${
                    hoveredCard === 2
                      ? "text-tertiary scale-105"
                      : "text-tertiary"
                  }`}
                >
                  {totalGestalty}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
