import Image from "next/image";

const TopBox = async (props: any) => {
  const users = props.props;
  return (
    <div className="topBox">
      <h1>Usuarios</h1>
      <div className="list">
        {users.map((user: any) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <Image src={user.userImageSrc} alt="" width={20} height={20} />
              <div className="userTexts">
                <span className="username">{user.userName}</span>
              </div>
              <span className="amount">Puntos: {user.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
