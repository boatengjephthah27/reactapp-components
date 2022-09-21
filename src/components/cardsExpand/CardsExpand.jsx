import React from 'react';
import './cardsexpand.css';
// import { useEffect, useState } from 'react';

const CardsExpand = () => {

    const panels = document.querySelectorAll('panel')

    panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
    });
  
    const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    };

    return (
        <div className='container'>
            <div className='panel bg-b'>
                <h3>Explore the world </h3>
            </div>

            <div className='panel active bg-a'>
                <h3>Explore the world </h3>
            </div>

            <div className='panel bg-c'>
                <h3>Explore the world </h3>
            </div>

            <div className='panel bg-d'>
                <h3>Explore the world </h3>
            </div>

            <div className='panel bg-e'>
                <h3>Explore the world </h3>
            </div>

        </div>
  )
};

export default CardsExpand;