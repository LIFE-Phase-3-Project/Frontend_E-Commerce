import { useSelector } from "react-redux";
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export const BarChartComponent = ({ data }) => {
    const isDarkMode = useSelector(state => state.darkTheme.darkMode);
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid stroke="none" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip
                    cursor={{ fill: 'rgba(200, 200, 200, 0.5)' }}
                    contentStyle={{ backgroundColor: '#2d3748', borderColor: '#4a5568', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Bar dataKey="payments" fill={`${isDarkMode ? "#7b2cbf" : "#a7fed88f"}`} barSize={70} />
            </BarChart>
        </ResponsiveContainer>
    );
};
