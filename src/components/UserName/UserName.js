import { Typography } from "antd";
import { useSelector } from "react-redux";
const { Text } = Typography;

const UserName = () => {
  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.email);
  return (
    <div id="userName">
      <Text mark>
        Username - {userName}, email - {userEmail}
      </Text>
    </div>
  );
};

export default UserName;
