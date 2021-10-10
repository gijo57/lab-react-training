import profiles from './data/berlin.json';

const Facebook = () => {
  return (
    <ul class="usersList">
      {profiles.map((profile) => {
        return (
          <li key={profile.img} className="profile IdCard">
            <img src={profile.img} alt={profile.lastName} />
            <div className="info">
              <div className="field">
                <strong>First name: </strong>
                <span>{profile.firstName}</span>
              </div>
              <div className="field">
                <strong>Last name: </strong>
                <span>{profile.lastName}</span>
              </div>
              <div className="field">
                <strong>Country: </strong>
                <span>{profile.country}</span>
              </div>
              <div className="field">
                <strong>Type: </strong>
                <span>{(profile.isStudent && 'Student') || 'Teacher'}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Facebook;
