"use client"

import { Fragment } from "react"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ILeadProps } from "@/types/lead-types"

import moment from "moment"

const chartConfig = {
  desktop: {
    label: "History of Consuption: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LineChart({ lead }: { lead: ILeadProps }) {

  if (!lead) null;

  return (
    <Card className="min-w-[400px] min-h-[400px] bg-gray-950 text-white">
      <CardHeader>
        <CardTitle>Lead id: {lead.id}</CardTitle>
        <CardDescription>
          Showing total history Of Consumption In KWH
        </CardDescription>
      </CardHeader>
      {lead.units.map((unit) => {
        return (
          <Fragment key={unit.id}>
            <CardDescription className="text-center">
              Code: {unit.codeOfConsumerUnit}
            </CardDescription>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={unit.historyOfConsumptionInKWH}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="monthOfConsumption"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => moment(value).format("MM/YY").toString()}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="consumptionForaPontaEmKWH"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by <span className="">
                      {
                        unit.historyOfConsumptionInKWH.reduce((acc, item, index, arr) => {
                          if (arr.length < 2) return 0;
                      
                          if (index === arr.length - 1) { 
                            const initial: number = arr[0].consumptionForaPontaEmKWH;
                            const final:number = item.consumptionForaPontaEmKWH;
                            acc = ((final - initial) / initial) * 100;
                          }
                          return acc;
                        }, 0).toFixed(0)
                      }%</span> this cicle
                      <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardFooter>
          </Fragment>
        )
      })}
    </Card>
  )
}

