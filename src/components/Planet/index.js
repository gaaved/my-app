import { Table } from "antd";
import UserName from "../UserName/UserName";
import Layout from "../Layout";
import { ErrorMessage } from "./styles";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../helpers/apiSlice";

const Planet = () => {
  const { data, error, isLoading } = useGetPostsQuery("planets");

  const cash = useSelector((state) => state.users.user);

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
      title: "Climate",
      dataIndex: "climate",
      key: "climate",
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      key: "diameter",
    },
    {
      title: "Gravity",
      dataIndex: "gravity",
      key: "gravity",
    },
    {
      title: "OrbitalPeriod",
      dataIndex: "orbitalPeriod",
      key: "orbitalPeriod",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "RotationPeriod",
      dataIndex: "rotationPeriod",
      key: "rotationPeriod",
    },
    {
      title: "SurfaceWater",
      dataIndex: "surfaceWater",
      key: "surfaceWater",
    },
    {
      title: "Terrain",
      dataIndex: "terrain",
      key: "terrain",
    },
  ];

  return (
    <Layout>
      <UserName />
      <h1>{cash}</h1>
      <h1>It is your list of Planets</h1>
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

export default Planet;
