import { Typography } from "antd";
const { Text } = Typography;

const UserName = () => {
  const userName = localStorage.getItem("userName");

  return (
    <div id="userName">
      <Text mark>Hello {userName}</Text>
    </div>
  );
};

export default UserName;
