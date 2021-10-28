import { Component } from "react";
declare class ColorPicker extends Component<any> {
    state: {
        displayColorPicker: boolean;
        color: any;
        tempColor: any;
        default: boolean;
    };
    handleClick: () => void;
    handleClose: () => void;
    handleChange: (color: any) => void;
    handleChoose: () => void;
    selectDefault: () => void;
    presetColors: string[];
    render(): JSX.Element;
}
export default ColorPicker;
