"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Data Definitions
const marketGrowthData = [
  { year: 2018, value: 22.8 },
  { year: 2019, value: 25.4 },
  { year: 2020, value: 27.7 },
  { year: 2021, value: 33.2 },
  { year: 2022, value: 38.9 },
  { year: 2023, value: 45.3 },
  { year: 2024, value: 52.8 },
  { year: 2025, value: 61.6, projected: true },
  { year: 2026, value: 72.1, projected: true },
  { year: 2027, value: 84.3, projected: true },
];

const industryAdoptionData = [
  { industry: "Manufacturing", current: 65, potential: 90 },
  { industry: "Healthcare", current: 42, potential: 85 },
  { industry: "Agriculture", current: 28, potential: 75 },
  { industry: "Retail", current: 35, potential: 70 },
  { industry: "Logistics", current: 55, potential: 88 },
  { industry: "Construction", current: 20, potential: 65 },
];

const efficiencyData = [
  { category: "Production Speed", withRobotics: 85, withoutRobotics: 40 },
  { category: "Error Rate", withRobotics: 5, withoutRobotics: 25 },
  { category: "Operational Cost", withRobotics: 35, withoutRobotics: 70 },
  { category: "Energy Usage", withRobotics: 45, withoutRobotics: 75 },
  { category: "Maintenance", withRobotics: 30, withoutRobotics: 60 },
];

// Process market data into two series for multi-area chart
const processedMarketData = marketGrowthData.map(item => ({
  year: item.year,
  actual: item.projected ? null : item.value,
  projected: item.projected ? item.value : null,
}));

export function ImpactChart() {
  const [activeTab, setActiveTab] = useState("market")

  return (
    <section className="py-20 text-white w-full">
      <div className="container mx-auto h-[700px] px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Robotics Impact Metrics</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore how robotics and AI technologies are transforming industries worldwide
          </p>
        </motion.div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Robotics Industry Insights</CardTitle>
              <CardDescription>
                Comprehensive data on market growth, industry adoption, and efficiency improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="market" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="market">Market Growth</TabsTrigger>
                  <TabsTrigger value="adoption">Industry Adoption</TabsTrigger>
                  <TabsTrigger value="efficiency">Efficiency Gains</TabsTrigger>
                </TabsList>

                <TabsContent value="market" className="pt-6 min-h-screen">
                  <ChartContainer
                    config={{
                      actual: {
                        label: "Actual Market Size (Billion USD)",
                        color: "white",
                      },
                      projected: {
                        label: "Projected Market Size (Billion USD)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[400px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={processedMarketData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <defs>
                          <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="actual"
                          stroke="#8884d8"
                          fill="url(#actualGradient)"
                          strokeWidth={2}
                          name="Actual Market Size"
                        />
                        <Area
                          type="monotone"
                          dataKey="projected"
                          stroke="#82ca9d"
                          fill="url(#projectedGradient)"
                          strokeWidth={2}
                          name="Projected Market Size"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Global robotics market size in billions USD with actual (solid) and projected (dashed) values
                  </p>
                </TabsContent>

                <TabsContent value="adoption" className="pt-6">
                  <ChartContainer
                    config={{
                      current: {
                        label: "Current Adoption (%)",
                        color: "white",
                      },
                      potential: {
                        label: "Potential Adoption (%)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[400px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={industryAdoptionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="industry" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="current" fill="Green" name="Current Adoption (%)" />
                        <Bar dataKey="potential" fill="skyBlue" name="Potential Adoption (%)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Current vs potential robotics adoption across major industries
                  </p>
                </TabsContent>

                <TabsContent value="efficiency" className="pt-6">
                  <ChartContainer
                    config={{
                      withRobotics: {
                        label: "With Robotics (%)",
                        color: "green",
                      },
                      withoutRobotics: {
                        label: "Without Robotics (%)",
                        color: "skyBlue",
                      },
                    }}
                    className="h-[400px] w-full "
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={efficiencyData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="category" type="category" width={120} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="withRobotics" fill="green" name="With Robotics (%)" />
                        <Bar dataKey="withoutRobotics" fill="skyBlue" name="Without Robotics (%)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Efficiency comparison between robotics-enabled and traditional operations
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
