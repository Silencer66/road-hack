declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module ".jpg" {
    const value: string;
    export default value;
}
declare module ".jpeg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV_: boolean;
