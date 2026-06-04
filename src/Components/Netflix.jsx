import React from 'react';
// import "./Netflix.css";


export default function Netflix() {

    const profiles = [
      {
        name: "chokku",
      image: "https://randomuser.me/api/portraits/men/77.jpg"
          

      },
      {
        name:"luffy",
        image:"https://randomuser.me/api/portraits/women/44.jpg"
    
      },
      {
      name: "mani",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "pavithra",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
    ];



  return (
    <div className="netflix-container">
      <h1>Who's watching?</h1>

      <div className="profiles">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <img src={profile.image} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>

      <button className="manage-btn">
        Manage Profiles
      </button>
    </div>
  );
  
}