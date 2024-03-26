import { useRequest } from "ahooks";
import { Table } from "antd";
import { fetchData } from "../SimulatedRequest";
import UserName from "../UserName";
import Layout from "../Layout";

const Starship = () => {
  const { loading, data, error } = useRequest(() => fetchData("starships"));

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
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "StarshipClass",
      dataIndex: "starshipClass",
      key: "starshipClass",
    },
    {
      title: "Passengers",
      dataIndex: "passengers",
      key: "passengers",
    },
    {
      title: "CargoCapacity",
      dataIndex: "cargoCapacity",
      key: "cargoCapacity",
    },
    {
      title: "Consumables",
      dataIndex: "consumables",
      key: "consumables",
    },
    {
      title: "CostInCredits",
      dataIndex: "costInCredits",
      key: "costInCredits",
    },
    {
      title: "Crew",
      dataIndex: "crew",
      key: "crew",
    },
    {
      title: "HyperdriveRating",
      dataIndex: "hyperdriveRating",
      key: "hyperdriveRating",
    },
    {
      title: "Length",
      dataIndex: "length",
      key: "length",
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      title: "MaxAtmosphericSpeed",
      dataIndex: "maxAtmosphericSpeed",
      key: "maxAtmosphericSpeed",
    },
  ];

  return (
    <Layout>
      <UserName />
      <h1>It is your list of Starships</h1>
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

export default Starship;
