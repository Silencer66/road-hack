import { classNames } from "shared/lib/classNames/classNames";
import cls from "./DataList.module.scss";
import { List, Typography } from "antd";
import { Flex, Input } from "antd";

import DataService from "features/DataService/DataService";

interface DataListProps {
    className?: string;
}

const { Search } = Input;

export const DataList = (props: DataListProps) => {
    const { className } = props;

    const data = [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires.",
    ];

    const onSearch = (text: string) => {
        async function getData(text: string) {
            try {
                var response = await DataService.get(text);
            } catch (e) {
                console.log(e);
            }
        }

        getData(text);
        console.log(text);
    };

    return (
        <Flex
            className={classNames(cls.DataList, {}, [className])}
            justify="center"
            align="center"
            vertical
        >
            <Search
                className={cls.Search}
                placeholder="Поиск"
                onSearch={onSearch}
                style={{ width: 200 }}
            />
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </Flex>
    );
};
