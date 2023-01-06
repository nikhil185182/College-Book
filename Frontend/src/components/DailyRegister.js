import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';

DailyRegister.propTypes = {
    dailyregisterList: PropTypes.array,
};

DailyRegister.defaultProps = {
    dailyregisterList: [],
};

export default function DailyRegister(props) {
    const { dailyregisterList } = props;
    return (
        <BarChart
            width={700}
            height={300}
            data={dailyregisterList}

        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="postdate">
            </XAxis>
            <YAxis><Label value="Users" position="insideBottom" /></YAxis>
            <Tooltip />
            <Bar dataKey="no" fill="#4FBE37" />
        </BarChart>
    );
}
