import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import Logo from "shared/assets/images/fda-heraldic-for-favicon-svg.png";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Flex } from "antd";

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
                    to={"/docunents"}
                >
                    Документы
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={"/"}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/aboutPage"}>
                    О сайте
                </AppLink>
            </div>
        </Flex>
    );
};
