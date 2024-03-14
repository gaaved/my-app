import Routs from "../routs";
import {useRequest} from "ahooks";
import {Table} from "antd";
import {fetchData} from "../SimulatedRequest";
import UserName from "../UserName";

export default function Planet() {
    const { loading, data } = useRequest(() => fetchData('planets'));

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
        <div id="Planet">
            <Routs />
            <div className="contentStyle">
                <UserName/>
                <h1>It is your list of Planets</h1>
                <Table
                    dataSource={data}
                    columns={columns}
                    loading={loading}
                    pagination={true}
                    rowKey={(record) => record.id}
                />
            </div>
        </div>
    );
}