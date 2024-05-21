// const MainPage = () => {
//     return <div>Main page</div>;
// };

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { DataList } from "features/DataList/ui/DataList";
import { Flex } from "antd";

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;

    const data1 = [
        "Бульдозеры-рыхлители на тракторе, мощность 79 кВт (108 л.с.), маш.-ч",
        "Бульдозеры-рыхлители на тракторе, мощность 121 кВт (165 л.с.)', маш.-ч",
        "Бульдозеры-рыхлители на тракторе, мощность 132 кВт (180 л.с.)', маш.-ч",
    ];
    return (
        <Flex
            className={classNames(cls.MainPage, {}, [className])}
            align="center"
            justify="center"
        >
            {/* <DataList data={data1} />
            <DataList data={data1} /> */}
            <Flex>
                <DataList data={data1} />
            </Flex>
        </Flex>
    );
};
export default MainPage;
