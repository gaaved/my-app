import { useRequest } from "ahooks";
import { Table } from "antd";
import { fetchData } from "../../helpers/utils";
import UserName from "../UserName/UserName";
import Layout from "../Layout";
import { ErrorMessage } from "./styles";
import { useSelector } from "react-redux";

const Planet = () => {
  const { loading, data, error } = useRequest(() => fetchData("planets"));
  const cash = useSelector((state) => state.user.user);

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
        loading={loading}
        rowKey={(record) => record.id}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Layout>
  );
};

export default Planet;
