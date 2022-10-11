import React from 'react';
import './cardsexpand.css';
import { useState } from 'react';

const CardsExpand = () => {

    const [classselect, expand] = useState('panel')

    const panels = document.querySelectorAll(classselect)

    
    expand(
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
    })
    }));
  
    const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    };

    return (
        <div className='container'>
            <div className={classselect}>
                <h3>Explore the world </h3>
            </div>

            <div className={classselect}>
                <h3>Explore the world </h3>
            </div>

            <div className={classselect}>
                <h3>Explore the world </h3>
            </div>

            <div className={classselect}>
                <h3>Explore the world </h3>
            </div>

            <div className={classselect}>
                <h3>Explore the world </h3>
            </div>

        </div>
  )
};

export default CardsExpand;