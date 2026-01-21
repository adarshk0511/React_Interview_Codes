const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={user.name}
        width="60"
        height="60"
        style={{ borderRadius: "50%" }}
      />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
