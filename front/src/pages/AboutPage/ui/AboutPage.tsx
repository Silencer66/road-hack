import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation();

    return <div>{t("Информация о продукте")}</div>;
};

export default AboutPage;
