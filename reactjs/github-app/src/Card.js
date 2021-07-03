import React from 'react';

const imgStyle = {
    width: '75px',
  };
  const profileStyle = {
    margin: '1rem',
  };
  
  const infoStyle = {
    display: 'inline-block',
    marginLeft: '12px',
  };
  
  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  const companyStle = {
    fontSize: '1rem',
    fontWeight: 'italic',
  };
class Card extends React.Component {
    render() {
      const profile = this.props;
      return (
        <div style={profileStyle}>
          <img src={profile.avatar_url} style={imgStyle} />
          <div style={infoStyle}>
            <div style={nameStyle}> {profile.name} </div>
            <div style={companyStle}> {profile.company} </div>
          </div>
        </div>
      );
    }
  }

  export default Card;