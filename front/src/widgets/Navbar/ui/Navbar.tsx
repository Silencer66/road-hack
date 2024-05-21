import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import Logo from "shared/assets/images/fda-heraldic-for-favicon-svg.png";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Flex } from "antd";
import { LangSwitcher } from "widgets/LangSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <Flex className={classNames(cls.Navbar, {}, [className])}>
            <img className={cls.Image} src={Logo} alt="logo" />

            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={"/"}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={"/documents"}
                >
                    Документы
                </AppLink>
                <LangSwitcher className={cls.LangSwitcher} />
            </div>
        </Flex>
    );
};
