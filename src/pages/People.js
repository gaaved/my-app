import { Table } from "antd";
import { useRequest } from "ahooks";
import { fetchData } from "../utils";
import UserName from "../UserName";
import Layout from "../Layout";

const People = () => {
  const { loading, data, error } = useRequest(() => fetchData("people"));

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
        loading={loading}
        rowKey={(record) => record.id}
      />
      {error && <div className="error-message">{error.message}</div>}
    </Layout>
  );
};

export default People;
