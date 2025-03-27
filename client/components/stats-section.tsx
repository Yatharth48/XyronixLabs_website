"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart, LineChart, PieChart, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function StatCard({ icon, value, label, prefix = "", suffix = "" }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(value * progress);

        if (frame === totalFrames) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(currentCount);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <Card ref={ref} className="bg-[#1a1f2b] text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-purple-400">{icon}</div>
          <div className="text-sm font-medium text-gray-400">{new Date().getFullYear()}</div>
        </div>
        <div className="text-3xl font-bold mb-2">
          {prefix}
          {isInView ? count : 0}
          {suffix}
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-[#0b121f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Xyronix Labs is transforming industries with innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<BarChart className="h-8 w-8" />} value={85} label="Reduction in false alarms" suffix="%" />
          <StatCard icon={<LineChart className="h-8 w-8" />} value={500} label="Installations worldwide" prefix="+" />
          <StatCard icon={<PieChart className="h-8 w-8" />} value={99} label="System reliability" suffix="%" />
          <StatCard icon={<Activity className="h-8 w-8" />} value={30} label="Response time improvement" suffix="%" />
        </div>
      </div>
    </section>
  );
}