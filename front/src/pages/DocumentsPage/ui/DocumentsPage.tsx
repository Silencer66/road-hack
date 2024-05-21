import { classNames } from "shared/lib/classNames/classNames";
import cls from "./DocumentsPage.module.scss";

interface DocumentsPageProps {
    className?: string;
}

export const DocumentsPage = (props: DocumentsPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.DocumentsPage, {}, [className])}></div>
    );
};
