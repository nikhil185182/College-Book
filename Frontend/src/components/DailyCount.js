import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';


DailyCount.propTypes = {
    dailycountList: PropTypes.array,
};

DailyCount.defaultProps = {
    dailycountList: [],
};

export default function DailyCount(props) {
    const { dailycountList } = props;
    return (
            <BarChart
                width={700}
                height={300}
                data={dailycountList}
               
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="postdate">
                </XAxis>
                <YAxis><Label value="Users" position="insideBottom"/></YAxis>
                <Tooltip />
                <Bar dataKey="no" fill="#4FBE37" />
            </BarChart>
    );
}
