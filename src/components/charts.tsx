"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Bar, BarChart, Area, AreaChart, XAxis, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const barChartData = [
  { name: "Jan", revenue: 1200, profit: 400 },
  { name: "Feb", revenue: 1800, profit: 600 },
  { name: "Mar", revenue: 2200, profit: 800 },
  { name: "Apr", revenue: 2600, profit: 1000 },
  { name: "May", revenue: 3200, profit: 1400 },
  { name: "Jun", revenue: 3800, profit: 1800 },
];

const areaChartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 45 },
  { month: "February", desktop: 305, mobile: 200, tablet: 90 },
  { month: "March", desktop: 237, mobile: 120, tablet: 85 },
  { month: "April", desktop: 73, mobile: 190, tablet: 105 },
  { month: "May", desktop: 209, mobile: 130, tablet: 115 },
  { month: "June", desktop: 214, mobile: 140, tablet: 125 },
];

const barChartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Charts() {
  return (
    <section id="charts" className="py-24 bg-muted">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">
          Data Visualization
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Usage</CardTitle>
              <CardDescription>
                Showing total visitors for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={areaChartConfig}>
                <AreaChart
                  data={areaChartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill={areaChartConfig.mobile.color}
                    fillOpacity={0.4}
                    stroke={areaChartConfig.mobile.color}
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill={areaChartConfig.desktop.color}
                    fillOpacity={0.4}
                    stroke={areaChartConfig.desktop.color}
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>
                A bar chart showing monthly revenue.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer config={barChartConfig}>
                <BarChart data={barChartData}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="revenue"
                    fill={barChartConfig.revenue.color}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="profit"
                    fill={barChartConfig.profit.color}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Revenue up by 12.5% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
