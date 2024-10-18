const UserCard = ({ user, onSave, onShowWeather }) => {
  return (
    <li className="rounded-lg p-4 shadow-lg m-4 list-none basis-1/3 bg-white">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        {`${user.name.first} ${user.name.last}`}
      </h2>
      <p className="text-center text-gray-600">Gender: {user.gender}</p>
      <p className="text-center text-gray-600">Email: {user.email}</p>
      <p className="text-center text-gray-600">
        Location: {`${user.location.city}, ${user.location.country}`}
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
        <button
          onClick={onShowWeather}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Weather
        </button>
      </div>
    </li>
  );
};

export default UserCard;
