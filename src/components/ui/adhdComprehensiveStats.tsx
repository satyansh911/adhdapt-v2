"use client"

import { useState, useEffect } from "react"
import { FaInfoCircle, FaBrain, FaUsers, FaChartLine, FaGlobe } from "react-icons/fa"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import GroupIcon from "./icons/groupIcon"
import BrainIcon from "./icons/brainIcon"
import RatioIcon from "./icons/ratioIcon"
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

const ADHDComprehensiveStats = () => {
  const [loading, setLoading] = useState(true)
  const [animateCards, setAnimateCards] = useState(false)

  const dummyData = {
    prevalence: {
      global: 5.3,
      byContinent: {
        "North America": 6.1,
        Europe: 5.4,
        Asia: 4.8,
        Africa: 3.9,
        "South America": 5.7,
        Oceania: 5.2,
      },
      byAge: {
        children: 8.4,
        teenagers: 6.2,
        adults: 4.1,
        elderly: 2.8,
      },
    },
    gender: {
      male: 12.9,
      female: 5.6,
    },
    socioeconomic: {
      highIncome: 6.2,
      middleIncome: 4.8,
      lowIncome: 3.5,
    },
  }

  const keyStats = [
    {
      number: "1 in 20",
      description: "Children worldwide have ADHD",
      detail: "Affecting millions of young minds globally",
      icon: GroupIcon,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 to-purple-50",
      darkBgGradient: "from-blue-900/20 to-purple-900/20",
    },
    {
      number: "366M",
      description: "Adults live with ADHD",
      detail: "Often undiagnosed and struggling daily",
      icon: BrainIcon,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-900/20 to-teal-900/20",
    },
    {
      number: "2:1",
      description: "Male to female diagnosis ratio",
      detail: "Though many females remain undiagnosed",
      icon: RatioIcon,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setTimeout(() => setAnimateCards(true), 200)
    }, 800)
  }, [])

  return (
    <div className="w-[1200px] py-12 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Main Layout: Left Stats + Right Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Key Statistics Cards */}
          <div className="space-y-6">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                    animateCards ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 "></div>

                  <div className="relative p-6 text-center">
                    {/* Icon */}
                      <IconComponent className="text-xl text-white" />

                    {/* Number */}
                    <div
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>

                    {/* Description */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {stat.description}
                    </h3>

                    {/* Detail */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Compact Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Global Prevalence Doughnut Chart */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#ffd12d] to-orange-500 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Global Prevalence</h3>
              </div>
              <div className="h-32">
                <Doughnut
                  data={{
                    labels: ["ADHD Prevalence", "General Population"],
                    datasets: [
                      {
                        data: [dummyData.prevalence.global, 100 - dummyData.prevalence.global],
                        backgroundColor: ["rgba(255, 209, 45, 0.8)", "rgba(229, 231, 235, 0.3)"],
                        borderColor: ["rgba(255, 209, 45, 1)", "rgba(229, 231, 235, 0.5)"],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "60%",
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: {
                          boxWidth: 8,
                          font: { size: 9, weight: 600 },
                          padding: 8,
                          usePointStyle: true,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Age Distribution Bar Chart */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Age Distribution</h3>
              </div>
              <div className="h-32">
                <Bar
                  data={{
                    labels: ["Children", "Teens", "Adults", "Elderly"],
                    datasets: [
                      {
                        label: "Prevalence %",
                        data: Object.values(dummyData.prevalence.byAge),
                        backgroundColor: [
                          "rgba(16, 185, 129, 0.8)",
                          "rgba(20, 184, 166, 0.8)",
                          "rgba(6, 182, 212, 0.8)",
                          "rgba(14, 165, 233, 0.8)",
                        ],
                        borderColor: [
                          "rgba(16, 185, 129, 1)",
                          "rgba(20, 184, 166, 1)",
                          "rgba(6, 182, 212, 1)",
                          "rgba(14, 165, 233, 1)",
                        ],
                        borderWidth: 1,
                        borderRadius: 4,
                        borderSkipped: false,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                      x: {
                        grid: { display: false },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Gender Distribution</h3>
              </div>
              <div className="h-32">
                <Bar
                  data={{
                    labels: ["Male", "Female"],
                    datasets: [
                      {
                        label: "Diagnosis Rate %",
                        data: [dummyData.gender.male, dummyData.gender.female],
                        backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(244, 114, 182, 0.8)"],
                        borderColor: ["rgba(59, 130, 246, 1)", "rgba(244, 114, 182, 1)"],
                        borderWidth: 1,
                        borderRadius: 4,
                        borderSkipped: false,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                      x: {
                        grid: { display: false },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Continental Distribution */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">By Continent</h3>
              </div>
              <div className="h-32">
                <Bar
                  data={{
                    labels: Object.keys(dummyData.prevalence.byContinent).map((key) => key.split(" ")[0]),
                    datasets: [
                      {
                        label: "Prevalence %",
                        data: Object.values(dummyData.prevalence.byContinent),
                        backgroundColor: [
                          "rgba(139, 92, 246, 0.8)",
                          "rgba(124, 58, 237, 0.8)",
                          "rgba(109, 40, 217, 0.8)",
                          "rgba(91, 33, 182, 0.8)",
                          "rgba(76, 29, 149, 0.8)",
                          "rgba(67, 56, 202, 0.8)",
                        ],
                        borderColor: [
                          "rgba(139, 92, 246, 1)",
                          "rgba(124, 58, 237, 1)",
                          "rgba(109, 40, 217, 1)",
                          "rgba(91, 33, 182, 1)",
                          "rgba(76, 29, 149, 1)",
                          "rgba(67, 56, 202, 1)",
                        ],
                        borderWidth: 1,
                        borderRadius: 4,
                        borderSkipped: false,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 7, weight: 600 } },
                      },
                      x: {
                        grid: { display: false },
                        ticks: {
                          font: { size: 7, weight: 600 },
                          maxRotation: 45,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Socioeconomic Impact */}
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Socioeconomic Impact</h3>
              </div>
              <div className="h-32">
                <Line
                  data={{
                    labels: ["High Income", "Middle Income", "Low Income"],
                    datasets: [
                      {
                        label: "ADHD Prevalence %",
                        data: Object.values(dummyData.socioeconomic),
                        borderColor: "rgba(16, 185, 129, 1)",
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: "rgba(16, 185, 129, 1)",
                        pointBorderColor: "#ffffff",
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 5,
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0,0,0,0.05)" },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                      x: {
                        grid: { display: false },
                        ticks: { font: { size: 8, weight: 600 } },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Key Insights */}
            <div className="group bg-gradient-to-br from-[#ffd12d]/10 via-orange-500/10 to-red-500/10 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#ffd12d] to-orange-500 rounded-full mr-2"></div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Key Insights</h3>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Global Average", value: `${dummyData.prevalence.global}%`, color: "text-blue-600" },
                  {
                    label: "Highest (Children)",
                    value: `${dummyData.prevalence.byAge.children}%`,
                    color: "text-purple-600",
                  },
                  {
                    label: "Male vs Female",
                    value: `${(dummyData.gender.male / dummyData.gender.female).toFixed(1)}:1`,
                    color: "text-pink-600",
                  },
                  {
                    label: "Income Gap",
                    value: `${(dummyData.socioeconomic.highIncome - dummyData.socioeconomic.lowIncome).toFixed(1)}%`,
                    color: "text-green-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-1.5 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">{item.label}:</span>
                    <span className={`font-bold text-xs ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ADHDComprehensiveStats
