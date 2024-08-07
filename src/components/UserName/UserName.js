import { Typography } from "antd";
import { useSelector } from "react-redux";
const { Text } = Typography;

const UserName = () => {
  const userName = useSelector((state) => state.users.userName);
  const userEmail = useSelector((state) => state.users.email);

  return (
      <Text mark>
        Username - {userName}, email - {userEmail}
      </Text>
  );
};

export default UserName;
