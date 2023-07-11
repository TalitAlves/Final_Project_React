function Logout({ onLogout }) {
  return (
    <>
      <a href="/#" onClick={onLogout}>
        Logout
      </a>
    </>
  );
}

export default Logout;
