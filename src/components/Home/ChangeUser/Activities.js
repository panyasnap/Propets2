import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../../../style.home/PostPage.module.css";
import ActivPost from "./ActivPost";
import {getActivities} from "../../../redux/activities/action";

const Activities = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.activities.loading);

    useEffect(() => {
        dispatch(getActivities(0))
    }, [])


    if (loading) {
        return (
            <div className={`${style.loadingPage}`}>
                LOADING..
            </div>
        )
    } else {
        return (
            <div>
               <ActivPost/>
            </div>
        )
    }
};

export default Activities;