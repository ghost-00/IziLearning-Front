const Logout = () => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    // Force a full reload of the page
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
