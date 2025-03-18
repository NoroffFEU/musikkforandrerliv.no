import React from 'react';
import content from '../../data/landing-page-content.json';

export default function WorkSection() {
    const { image, title, description } = content.workSection;
    console.log(content.workSection); // delete this line
    return (
        <section id="WorkSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={image} alt={title} />
                    </div>
                    <div className="col-lg-6">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn">READ MORE</button>
                    </div>    
                </div>
            </div>
        </section>
    );
}