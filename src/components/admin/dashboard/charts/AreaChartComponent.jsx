import { useSelector } from "react-redux";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const AreaChartComponent = ({ data }) => {
    const isDarkMode = useSelector(state => state.darkTheme.darkMode)
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={`${isDarkMode ? "#2563eb" : "white"}`} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={`${isDarkMode ? "#2563eb" : "white"}`} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="month" 
                    tickFormatter={(tick) => new Date(tick).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} 
                    tick={{ fill: '#f9f9f9' }} 
                />
                <YAxis tick={{ fill: '#f9f9f9' }} />
                <CartesianGrid stroke="none" />
                <Tooltip />
                <Area type="monotone" dataKey="orders" stroke={`${isDarkMode ? "#2563eb" : "white"}`} fillOpacity={1} fill="url(#colorOrders)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};
