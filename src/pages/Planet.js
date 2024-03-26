import { useRequest } from "ahooks";
import { Table } from "antd";
import { fetchData } from "../SimulatedRequest";
import UserName from "../UserName";
import Layout from "../Layout";

const Planet = () => {
  const { loading, data, error } = useRequest(() => fetchData("planets"));

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
      <h1>It is your list of Planets</h1>
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

export default Planet;
