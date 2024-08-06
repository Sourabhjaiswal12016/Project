import React from "react";

const FollowerCard = ({ follower, onRemove }) => {
  return (
    <div className="follower-card">
      <img src={follower.image} alt={follower.fullname} />
      <h3>{follower.fullname}</h3>
      <p>Username: {follower.username}</p>
      <p>Friends: {follower.twubric.friends}</p>
      <p>Influence: {follower.twubric.influence}</p>
      <p>Chirpy: {follower.twubric.chirpiness}</p>
      <p>Twubric Score: {follower.twubric.total}</p>
      <p>Joined: {new Date(follower.join_date * 1000).toLocaleDateString()}</p>
      <button onClick={() => onRemove(follower.uid)}>Remove</button>
    </div>
  );
};

export default FollowerCard;
