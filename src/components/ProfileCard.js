import React, { useState, useEffect } from 'react';
import Map from './Map';

// Import male and female profile images from assets folder
import maleImage1 from './assets/male-1.jpg';
import maleImage2 from './assets/male-2.jpg';
import maleImage3 from './assets/male-3.jpg';
import maleImage4 from './assets/male-4.jpg';
import femaleImage1 from './assets/female-1.jpg';
import femaleImage2 from './assets/female-2.jpg';
import femaleImage3 from './assets/female-3.jpg';
import femaleImage4 from './assets/female-4.jpg';

const ProfileCard = ({ profile, onEdit, onDelete }) => {
  const [showMap, setShowMap] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    // Fetch profile image based on gender and ID
    const fetchProfileImage = () => {
      let image;
      if (profile.gender === 'male') {
        // Select male profile image based on the sequence
        const maleImages = [maleImage1, maleImage2, maleImage3, maleImage4];
        image = maleImages[parseInt(profile.id) % maleImages.length];
      } else {
        // Select female profile image based on the sequence
        const femaleImages = [femaleImage1, femaleImage2, femaleImage3, femaleImage4];
        image = femaleImages[parseInt(profile.id) % femaleImages.length];
      }
      setProfileImage(image);
    };

    fetchProfileImage();
  }, [profile]);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>{profile.name}</h2>
        <div>
          <button onClick={toggleMap}>Summary</button>
          <button onClick={() => onEdit(profile)}>Edit</button>
          <button onClick={() => onDelete(profile)}>Delete</button>
        </div>
      </div>
      {showMap && <Map profile={profile} />}
      <div className="profile-details">
        {/* Display profile image */}
        {profileImage && <img src={profileImage} alt={profile.name} />}
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Description:</strong> {profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
