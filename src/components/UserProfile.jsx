import { stringToHslColor } from "../utils/utilsFunc";

const UserProfile = ({user = "user", onSignOut = () => {}}) => {
  return (
    <>
      <div
        onClick={onSignOut}
        style={{
          backgroundColor: stringToHslColor(user),
        }}
        className="text-white rounded-full w-10 h-10 flex justify-center items-center text-base uppercase cursor-pointer border-2"
      >
        {user?.slice(0, 2)}
      </div>
    </>
  );
};

export default UserProfile;
