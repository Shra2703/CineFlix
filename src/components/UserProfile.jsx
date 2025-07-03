import { stringToHslColor } from "../utils/utilsFunc";

const UserProfile = ({user = "user", onSignOut = () => {}}) => {
  return (
    <>
      <div
        onClick={onSignOut}
        style={{
          backgroundColor: stringToHslColor(user),
        }}
        className="text-white rounded-full w-14 h-14 flex justify-center items-center text-xl uppercase cursor-pointer border-2"
      >
        {user?.slice(0, 2)}
      </div>
    </>
  );
};

export default UserProfile;
