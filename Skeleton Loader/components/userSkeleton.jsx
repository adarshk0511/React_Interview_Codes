import Skeleton from "./skeleton";

const UserSkeleton = () => {
  return (
    <div className="user-card">
      <Skeleton width="60px" height="60px" radius="50%" />
      <Skeleton height="16px" />
      <Skeleton width="80%" height="16px" />
    </div>
  );
};

export default UserSkeleton;
