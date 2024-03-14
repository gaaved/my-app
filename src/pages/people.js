import Routs from "../routs";
import {Table} from "antd";
import {useRequest} from "ahooks";
import {fetchData} from "../SimulatedRequest";
import UserName from "../UserName";

export default function People() {
    const { loading, data } = useRequest(() => fetchData('people'));

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
        <div id="people">
            <Routs />
            <div className="contentStyle">
                <UserName/>
           <h1>It is your list of People</h1>
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
