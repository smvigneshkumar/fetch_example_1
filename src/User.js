const User = (props) => {
  return (
    <li key={props.user.id}>
      <h2>{props.user.id}</h2>
      <h3>{props.user.name}</h3>
      <p>{props.user.username}</p>
      <p>{props.user.phone}</p>
    </li>
  );
};
export default User;
