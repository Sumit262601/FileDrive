import React, { useState, useMemo } from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { chartConfig, pieChartData } from "@/data/index";

const StoragePieChart = () => {
    const id = "pie-interactive";
    const [activeItems, setActiveItems] = useState(pieChartData[0].item);

    const activeIndex = useMemo(
        () => pieChartData.findIndex((item) => item.item === activeItems),
        [activeItems]
    );

    const items = useMemo(() => pieChartData.map((item) => item.item), []);

    return (
        <Card data-chart={id} className="flex flex-col h-[100%]">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start border-b">
                <CardTitle className="px-2 text-xl">Storage</CardTitle>
                <Select value={activeItems} onValueChange={setActiveItems}>
                    <SelectTrigger
                        className="ml-auto pl-2.5 rounded-lg w-[120px] h-7"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                        {items.map((key) => {
                            const config = chartConfig[key];

                            if (!config) return null;

                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="[&_span]:flex rounded-lg"
                                >
                                    <div className="flex items-center gap-2 text-xs">
                                        <span
                                            className="flex rounded-sm w-3 h-3 shrink-0"
                                            style={{
                                                backgroundColor: `var(--color-${key})`,
                                            }}
                                        />
                                        {config?.label}
                                    </div>
                                </SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto w-full max-w-[350px] aspect-square"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={pieChartData}
                            dataKey="datapack"
                            nameKey="item"
                            innerRadius={90}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({ outerRadius = 0, ...props }) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox?.cx && viewBox?.cy) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="font-bold text-3xl fill-foreground"
                                                >
                                                    {pieChartData[activeIndex].datapack.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground text-[15px]"
                                                >
                                                    Used of 500 MB
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                        <ChartLegend
                            content={<ChartLegendContent nameKey="item" />}
                            className="flex-wrap gap-2 mb-6 -translate-y-4"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default StoragePieChart;
