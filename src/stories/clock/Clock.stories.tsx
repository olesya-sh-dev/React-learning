import { Component } from "react";
import { Clock } from "./Clock";


export default {
    title: "Clock",
    component: Clock
};


export const BaseAnalogExample = () => <Clock mode="analog"/>
export const DigitalExample = () => <Clock mode="digital"/>