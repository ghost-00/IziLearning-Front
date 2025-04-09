import useUser from "../hooks/useUser";
const UserDetails = () => {
  const { currentUser, error, isLoading } = useUser();
  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (currentUser === null) {
    return <p>Welcome Please login</p>;
  }
  return (
    <>
      <h2>
        hello : {currentUser?.name}
        <ul>
          {currentUser?.roles.map((role, index) => (
            <li key={index}>{role.name}</li>
          ))}
        </ul>
      </h2>
    </>
  );
};

export default UserDetails;
