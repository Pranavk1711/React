import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css'; // Import CSS file for styling

const ProfileList = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Rahul Sharma', gender: 'male', address: 'Jaipur, Rajasthan', description: 'Software Engineer passionate about coding and technology.' },
    { id: 2, name: 'Priya Patel', gender: 'female', address: 'Mumbai, Maharashtra', description: 'Graphic Designer with a creative mind and attention to detail.' },
    { id: 3, name: 'Amit Kumar', gender: 'male', address: 'Lucknow, Uttar Pradesh', description: 'Doctor dedicated to providing healthcare services to rural communities.' },
    { id: 4, name: 'Anjali Gupta', gender: 'female', address: 'Chandigarh', description: 'Teacher committed to shaping young minds and fostering a love for learning.' },
    { id: 5, name: 'Sandeep Singh', gender: 'male', address: 'Delhi', description: 'Entrepreneur striving to build innovative solutions for social issues.' },
    { id: 6, name: 'Neha Sharma', gender: 'female', address: 'Bangalore, Karnataka', description: 'Marketing Manager with a passion for brand storytelling and customer engagement.' },
    { id: 7, name: 'Rajesh Patel', gender: 'male', address: 'Ahmedabad, Gujarat', description: 'Chef specializing in authentic Indian cuisine, bringing flavors from different regions to the table.' },
    { id: 8, name: 'Pooja Gupta', gender: 'female', address: 'Kolkata, West Bengal', description: 'Journalist dedicated to uncovering truth and bringing impactful stories to light.' }
  ]);

  const handleEdit = (editedProfile) => {
    const updatedProfiles = profiles.map(profile => {
      if (profile.id === editedProfile.id) {
        return editedProfile;
      }
      return profile;
    });
    setProfiles(updatedProfiles);
  };

  const handleDelete = (deletedProfile) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== deletedProfile.id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="profile-list-container">
      <h2>Profiles</h2>
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
