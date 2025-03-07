import React from 'react';
import '../assets/css/Gallery.css'; // We'll create this CSS file
import YouthFestImage from '../assets/images/update/Website Banner/Youth Fest.png';
import SeminarsImage from '../assets/images/update/Website Banner/Carousal 1.png';
import GuidanceImage from '../assets/images/update/Website Banner/Carousal 2.png';
import CharityImage from '../assets/images/update/Website Banner/Charity.png';
import MeditationImage from '../assets/images/update/Website Banner/Meditation.png';
import FunActivitiesImage from '../assets/images/update/Website Banner/Fun Activities.png';
import CampsImage from '../assets/images/update/Website Banner/Camps & Trips.png';
import DietImage from '../assets/images/coursel2.jpg';

const Gallery = () => {
    const activities = [
        { title: 'Youth Fest', image: YouthFestImage },
        { title: 'Seminars & Workshops', image: SeminarsImage },
        { title: 'Personal Guidance', image: GuidanceImage },
        { title: 'Charity Work', image: CharityImage },
        { title: 'Meditation', image: MeditationImage },
        { title: 'Fun Activities', image: FunActivitiesImage },
        { title: 'Camps & Trips', image: CampsImage },
        { title: 'Karma Free Diet', image: DietImage },
    ];

    return (
        <div className="gallery-container">
            {/* <div className='gallery-Scroller'> */}
            {activities.map((activity, index) => (
                <div key={index} className="gallery-card">
                    <img src={activity.image} alt={activity.title} className="gallery-image" style={{ objectFit: "contain" }} />
                    <div className="card-title">{activity.title}</div>
                </div>
            ))}
            {/* </div> */}
        </div>
    );
};

export default Gallery;