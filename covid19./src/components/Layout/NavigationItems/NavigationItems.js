import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';
const navigationItems=()=>(
    <ul className="NavigationItems">
        <NavigationItem link="/"exact>HOME</NavigationItem>
        <NavigationItem link="/faq">FAQ</NavigationItem>
        <NavigationItem link="/helpful-links">HELPFUL LINKS</NavigationItem>
    </ul>
);
export default navigationItems;