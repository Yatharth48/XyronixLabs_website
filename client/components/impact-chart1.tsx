"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ImpactChart() {
  const [activeTab, setActiveTab] = useState("revenue")
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current)
      }
    }
  }, [])

  return (
    <div ref={chartRef} className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
      >
        <Tabs defaultValue="revenue" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white">IoRT Market Impact</h2>
              <p className="text-gray-400">Analysis of IoRT technology adoption and impact across industries</p>
            </div>
            <TabsList className="bg-gray-800">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="adoption">Adoption</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
              <TabsTrigger value="distribution">Distribution</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="revenue" className="mt-0">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle>Revenue Growth by Industry (2020-2025)</CardTitle>
                <CardDescription>Annual revenue in millions USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis
                        dataKey="name"
                        stroke="#888"
                        angle={-45}
                        textAnchor="end"
                        tick={{ fill: "#888" }}
                        height={70}
                      />
                      <YAxis stroke="#888" tick={{ fill: "#888" }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Legend wrapperStyle={{ color: "#888" }} />
                      <Bar dataKey="2020" fill="#8884d8" name="2020" />
                      <Bar dataKey="2021" fill="#83a6ed" name="2021" />
                      <Bar dataKey="2022" fill="#8dd1e1" name="2022" />
                      <Bar dataKey="2023" fill="#82ca9d" name="2023" />
                      <Bar dataKey="2024" fill="#ffc658" name="2024" />
                      <Bar dataKey="2025" fill="#ff8042" name="2025 (Projected)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="adoption" className="mt-0">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle>IoRT Technology Adoption Rate</CardTitle>
                <CardDescription>Percentage of businesses adopting IoRT solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={adoptionData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="year" stroke="#888" tick={{ fill: "#888" }} />
                      <YAxis stroke="#888" tick={{ fill: "#888" }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Legend wrapperStyle={{ color: "#888" }} />
                      <Area type="monotone" dataKey="Manufacturing" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="Healthcare" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                      <Area type="monotone" dataKey="Transportation" stackId="1" stroke="#ffc658" fill="#ffc658" />
                      <Area type="monotone" dataKey="Agriculture" stackId="1" stroke="#ff8042" fill="#ff8042" />
                      <Area type="monotone" dataKey="SmartCities" stackId="1" stroke="#8dd1e1" fill="#8dd1e1" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="efficiency" className="mt-0">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle>Efficiency Improvements After IoRT Implementation</CardTitle>
                <CardDescription>Percentage improvement in operational efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={efficiencyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis type="number" stroke="#888" tick={{ fill: "#888" }} />
                      <YAxis dataKey="name" type="category" stroke="#888" tick={{ fill: "#888" }} width={150} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Legend wrapperStyle={{ color: "#888" }} />
                      <Bar dataKey="value" fill="#8884d8" name="Efficiency Improvement (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="mt-0">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle>Global IoRT Market Distribution (2025 Projection)</CardTitle>
                <CardDescription>Market share by region and industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 h-[400px]">
                  <div>
                    <h3 className="text-center text-sm font-medium mb-4 text-gray-300">By Region</h3>
                    <ResponsiveContainer width="100%" height="90%">
                      <PieChart>
                        <Pie
                          data={regionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {regionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }}
                          itemStyle={{ color: "#fff" }}
                          labelStyle={{ color: "#fff" }}
                          formatter={(value) => [`${value}%`, "Market Share"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-center text-sm font-medium mb-4 text-gray-300">By Industry</h3>
                    <ResponsiveContainer width="100%" height="90%">
                      <PieChart>
                        <Pie
                          data={industryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {industryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }}
                          itemStyle={{ color: "#fff" }}
                          labelStyle={{ color: "#fff" }}
                          formatter={(value) => [`${value}%`, "Market Share"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

const COLORS = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]

const revenueData = [
  { name: "Manufacturing", 2020: 120, 2021: 180, 2022: 240, 2023: 320, 2024: 420, 2025: 580 },
  { name: "Healthcare", 2020: 80, 2021: 130, 2022: 190, 2023: 280, 2024: 380, 2025: 510 },
  { name: "Transportation", 2020: 100, 2021: 150, 2022: 210, 2023: 290, 2024: 390, 2025: 530 },
  { name: "Agriculture", 2020: 60, 2021: 90, 2022: 140, 2023: 210, 2024: 290, 2025: 410 },
  { name: "Smart Cities", 2020: 90, 2021: 140, 2022: 200, 2023: 280, 2024: 380, 2025: 520 },
  { name: "Retail", 2020: 70, 2021: 110, 2022: 160, 2023: 230, 2024: 320, 2025: 450 },
  { name: "Energy", 2020: 110, 2021: 160, 2022: 220, 2023: 300, 2024: 400, 2025: 540 },
]

const adoptionData = [
  { year: "2020", Manufacturing: 15, Healthcare: 10, Transportation: 12, Agriculture: 8, SmartCities: 7 },
  { year: "2021", Manufacturing: 25, Healthcare: 18, Transportation: 20, Agriculture: 15, SmartCities: 14 },
  { year: "2022", Manufacturing: 38, Healthcare: 28, Transportation: 32, Agriculture: 24, SmartCities: 25 },
  { year: "2023", Manufacturing: 52, Healthcare: 42, Transportation: 45, Agriculture: 36, SmartCities: 38 },
  { year: "2024", Manufacturing: 68, Healthcare: 58, Transportation: 60, Agriculture: 50, SmartCities: 54 },
  { year: "2025", Manufacturing: 85, Healthcare: 75, Transportation: 78, Agriculture: 68, SmartCities: 72 },
]

const efficiencyData = [
  { name: "Production Throughput", value: 42 },
  { name: "Energy Consumption", value: 35 },
  { name: "Maintenance Costs", value: 48 },
  { name: "Quality Control", value: 52 },
  { name: "Supply Chain Efficiency", value: 38 },
  { name: "Labor Productivity", value: 45 },
  { name: "Time-to-Market", value: 40 },
]

const regionData = [
  { name: "North America", value: 35 },
  { name: "Europe", value: 28 },
  { name: "Asia Pacific", value: 25 },
  { name: "Latin America", value: 7 },
  { name: "Middle East & Africa", value: 5 },
]

const industryData = [
  { name: "Manufacturing", value: 30 },
  { name: "Healthcare", value: 18 },
  { name: "Transportation", value: 15 },
  { name: "Smart Cities", value: 12 },
  { name: "Agriculture", value: 10 },
  { name: "Retail", value: 8 },
  { name: "Energy", value: 7 },
]

