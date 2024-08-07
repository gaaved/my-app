import { Table } from "antd";
import UserName from "../UserName/UserName";
import Layout from "../Layout";
import { ErrorMessage } from "./styles";
import { useGetPostsQuery } from "../../helpers/apiSlice";

const People = () => {
  const { data, error, isLoading } = useGetPostsQuery("people");

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "BirthYear",
      dataIndex: "birthYear",
      key: "birthYear",
    },
    {
      title: "EyeColor",
      dataIndex: "eyeColor",
      key: "eyeColor",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "HairColor",
      dataIndex: "hairColor",
      key: "hairColor",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
    },
  ];

  return (
    <Layout>
      <UserName />
      <h1>It is your list of People</h1>
      <Table
        dataSource={data}
        columns={columns}
        loading={isLoading}
        rowKey={(record) => record.id}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Layout>
  );
};

export default People;
