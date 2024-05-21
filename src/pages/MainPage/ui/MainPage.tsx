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

    return (
        <Flex
            className={classNames(cls.MainPage, {}, [className])}
            align="center"
            justify="center"
        >
            <DataList></DataList>
        </Flex>
    );
};
export default MainPage;
