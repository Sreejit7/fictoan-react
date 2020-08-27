import { ReactElement } from "react";

import { ElementProps } from "../../Element/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

// prettier-ignore
export interface InputIconProps {
    iconLeft  ? : ReactElement;
    iconRight ? : ReactElement;
}

// prettier-ignore
export interface InputCommonProps {
    validateThis ? : boolean;
    valid        ? : boolean;
    invalid      ? : boolean;
}

export type BaseInputComponentProps<K extends {}> = ElementProps<K> & InputLabelCustomProps & InputCommonProps;
export type BaseInputComponentWithIconProps<K extends {}> = BaseInputComponentProps<K> & InputIconProps;
