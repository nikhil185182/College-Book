import React from 'react';
import DailyCount from './DailyCount';
import MainNavigation from './MainNavigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DailyActive from './DailyActive';
import DailyRegister from './DailyRegister';
import '../styles/Stats.css';

export default function Stats() {
    const [dailycountList, setDailyCountList] = useState([]);
    const [dailyactiveList, setDailyActiveList] = useState([]);
    const [dailyregisterList, setDailyRegisterList] = useState([]);

    useEffect(() => {
        async function fetchList() {
            try {
                await axios.get("https://localhost:44348/api/Quote/dailycount").then((res) => {
                    setDailyCountList(res.data);
                }).catch((error) => {
                    console.log(error);
                });
            } catch {
            }

            try {
                await axios.get("https://localhost:44348/api/Quote/dailyactive").then((res) => {
                    setDailyActiveList(res.data);
                }).catch((error) => {
                    console.log(error);
                });
            } catch {
            }

            try {
                await axios.get("https://localhost:44348/api/Users/User/dailyregister").then((res) => {
                    setDailyRegisterList(res.data);
                }).catch((error) => {
                    console.log(error);
                });
            } catch {
            }
        }
        fetchList();
        console.log("data checked");
    }, []);

    return (
        <div className='container'>
            <MainNavigation />
            <div className='stat'>
                <div className='p1'>
                    <h6>Posts Per Day (PPD)  - Trend</h6>
                    <DailyCount dailycountList={dailycountList} />
                </div>
                <div className='p1'>
                    <h6>Number of Active users Per Day - Trend</h6>
                    <DailyActive dailyactiveList={dailyactiveList} />
                </div>
                <div className='p1'>
                    <h6>Number of new users Per Day -  Trend</h6>
                    <DailyRegister dailyregisterList={dailyregisterList} />
                </div>
            </div>
        </div>
    )
}
