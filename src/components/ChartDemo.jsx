import React from 'react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid, Cell,
    Legend,
    Line,
    LineChart, Pie, PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 1000,},
    {name: 'Page B', uv: 3000, pv: 4000, amt: 5000,},
    {name: 'Page C', uv: 2000, pv: 5500, amt: 6000,},
    {name: 'Page D', uv: 2780, pv: 8908, amt: 2000,},
]

const COLORS = ['#0088f3', '#00ca9f', '#ffbb28', '#ff8042']

const ChartDemo = () => {

    return (
        <div className={'min-h-screen sm:p-8 flex flex-col gap-y-16'}>
            <h1 className={'mb-8 text-xl font-bold'}>Rechart Crash Course</h1>

            {/*Pie Chart*/}
            <section className={'sm:p-12 overflow-x-scroll w-full'}>
                <ResponsiveContainer height={400}>
                    <PieChart>
                        <Tooltip/>
                        <Legend/>
                        <Pie
                            data={data}
                            dataKey={'pv'}
                            cx={'50%'}
                            cy={'50%'}
                            outerRadius={120}
                            label
                            nameKey={'name'}>
                            {
                                data.map((item, i) => (
                                    <Cell
                                        key={`cell-${i}`}
                                        fill={COLORS[i]}
                                    />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </section>

            {/*Area Chart*/}
            <section className={'sm:p-12'}>
                <ResponsiveContainer width={'100%'} height={300}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray={'3 3'}/>
                        <XAxis dataKey={'name'}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Area type={'monotone'} dataKey={'pv'} fill={'green'}/>
                        {/*<Area type={'monotone'} dataKey={'uv'} fill={'orangered'}/>*/}
                        {/*<Area type={'monotone'} dataKey={'amt'} fill={'dodgerblue'}/>*/}
                    </AreaChart>
                </ResponsiveContainer>
            </section>

            {/*Line Chart*/}
            <section className={'sm:p-12'}>
                <ResponsiveContainer width={'100%'} height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray={'3 3'}/>
                        <XAxis dataKey={'name'}/>
                        <YAxis/>
                        <Tooltip
                            animationDuration={1000}
                            animationEasing={'ease-in-out'}
                        />
                        <Legend/>
                        <Line type={'monotone'} dot={{r:6}} strokeWidth={2} dataKey={'pv'} fill={'purple'}/>
                        {/*<Line type={'monotone'} strokeWidth={2} dataKey={'uv'} fill={'orangered'}/>*/}
                        {/*<Line type={'monotone'} strokeWidth={2} dataKey={'amt'} fill={'dodgerblue'}/>*/}
                    </LineChart>
                </ResponsiveContainer>
            </section>

            {/*Bar chart*/}
            <section className={'sm:p-12'}>
                <ResponsiveContainer width={'100%'} height={300}>
                    <BarChart data={data}>
                        <CartesianGrid stroke={'#ccc'} strokeDasharray={'3 3'}/>
                        <XAxis dataKey={'name'}/>
                        <YAxis/>
                        <Tooltip
                            animationDuration={1000}
                            animationEasing={'ease-in-out'}
                        />
                        <Legend/>
                        <Bar dataKey={'pv'} fill={'purple'} radius={[10,10,0,0]} />
                        {/*<Bar dataKey={'uv'} fill={'orangered'}/>*/}
                        {/*<Bar dataKey={'amt'} fill={'dodgerblue'}/>*/}
                    </BarChart>
                </ResponsiveContainer>
            </section>
        </div>
    );
};

export default ChartDemo;