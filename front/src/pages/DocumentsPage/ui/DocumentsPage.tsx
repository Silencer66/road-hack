import { classNames } from "shared/lib/classNames/classNames";
import cls from "./DocumentsPage.module.scss";
import {
    Button,
    Col,
    DatePicker,
    Flex,
    Form,
    Input,
    Row,
    Select,
    Space,
    theme,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DataList } from "features/DataList/ui/DataList";

const { Option } = Select;

interface DocumentsPageProps {
    className?: string;
}

const DocumentsPage = (props: DocumentsPageProps) => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const { className } = props;
    const [expand, setExpand] = useState(false);
    const [resData, setResData] = useState([]);
    const [respHeader, setRespHeader] = useState("");

    const formStyle: React.CSSProperties = {
        maxWidth: "none",
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 24,
    };

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };

    const getFirstRowFields = () => {
        const children = [];
        children.push(
            <Col>
                <Form.Item
                    name={`Поиск по документам`}
                    label={`Поиск по документам`}
                    rules={[
                        {
                            required: false,
                            message: "Введите что-нибудь!",
                        },
                    ]}
                >
                    <Input placeholder="Введите название документа" />
                </Form.Item>
            </Col>
        );
        return children;
    };

    const getSecondRowFields = () => {
        const children = [];
        children.push(
            <Col>
                <Form.Item
                    name={`Дата документа`}
                    label={`Дата`}
                    rules={[
                        {
                            required: false,
                            message: "Введите что-нибудь!",
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
            </Col>
        );
        children.push(
            <Col>
                <Form.Item
                    name={`Номер документа`}
                    label={`Номер документа`}
                    rules={[
                        {
                            required: false,
                            message: "...",
                        },
                    ]}
                    initialValue="1"
                >
                    <Input placeholder="Введите название документа" />
                </Form.Item>
            </Col>
        );
        children.push(
            <Col>
                <Form.Item
                    name={`Тип документа`}
                    label={`Тип документа`}
                    rules={[
                        {
                            required: false,
                            message: "Select something!",
                        },
                    ]}
                    initialValue="1"
                >
                    <Select className={cls.docTypeSelect}>
                        <Option value="1">111</Option>
                        <Option value="2">222</Option>
                    </Select>
                </Form.Item>
            </Col>
        );
        return children;
    };

    return (
        <Flex
            justify="center"
            vertical
            className={classNames(cls.DocumentsPage, {}, [className])}
        >
            <>Документы</>
            <Form
                form={form}
                name="advanced_search"
                style={formStyle}
                onFinish={onFinish}
            >
                <Row gutter={24}>{getFirstRowFields()}</Row>
                <Row gutter={24}>{getSecondRowFields()}</Row>
                <div style={{ textAlign: "right" }}>
                    <Space size="small">
                        <Button type="primary" htmlType="submit">
                            Поиск
                        </Button>
                        <Button
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            Очистить
                        </Button>
                        <a
                            style={{ fontSize: 12 }}
                            onClick={() => {
                                setExpand(!expand);
                            }}
                        ></a>
                    </Space>
                </div>
            </Form>

            <Flex className={cls.searchResultContainer}>
                <DataList
                    header={respHeader}
                    data={resData}
                    isSearchActive={false}
                />
            </Flex>
        </Flex>
    );
};
export default DocumentsPage;
