import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';

DailyActive.propTypes = {
    dailyactiveList: PropTypes.array,
};

DailyActive.defaultProps = {
    dailyactiveList: [],
};

export default function DailyActive(props) {
    const { dailyactiveList } = props;
    return (
        <BarChart
            width={700}
            height={300}
            data={dailyactiveList}

        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="postdate">
            </XAxis>
            <YAxis><Label value="Users" position="insideBottom" /></YAxis>
            <Tooltip />
            <Bar dataKey="no" fill="#4FBE37" />
        </BarChart>
    )
}
