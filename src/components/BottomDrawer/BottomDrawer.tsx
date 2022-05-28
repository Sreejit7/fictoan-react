import React from "react";

import { Element } from "../Element/Element";
import { ColourPropTypes, CommonAndHTMLProps, OpacityTypes, SpacingTypes } from "../Element/constants";

import { BottomDrawerStyled } from "./BottomDrawer.styled";

// prettier-ignore
export interface BottomDrawerCustomProps {
    isOpen          ? : boolean;
    onCloseCallback ? : () => void;
    overlayOpacity  ? : number;
}

export type BottomDrawerElementType = HTMLDivElement;
export type BottomDrawerProps = Omit<CommonAndHTMLProps<BottomDrawerElementType>, keyof BottomDrawerCustomProps> & BottomDrawerCustomProps;

export const BottomDrawer = React.forwardRef(({
    isOpen, children, onCloseCallback, padding, bgColor, bgColour, ...props
}: BottomDrawerProps, ref: React.Ref<BottomDrawerElementType>) => {
        let classNames = [];

        if (isOpen) {
            classNames.push("open");
        }

        const closeBottomDrawer = () => {
            if (onCloseCallback) {
                onCloseCallback();
            }
        };

        return (
            !!isOpen && (
                <>
                    <Element<BottomDrawerElementType>
                        as={BottomDrawerStyled}
                        ref={ref}
                        classNames={classNames}
                        {...props}
                    >
                        <Element
                            as="div"
                            classNames={[
                                ...classNames,
                                `rest-of-page-overlay`,
                            ]}
                            onClick={closeBottomDrawer}
                        />

                        <Element
                            as="div"
                            className="bottom-drawer-content-wrapper"
                            padding={padding} bgColor={bgColor} bgColour={bgColour}
                        >
                            <Element
                                as="div"
                                className="dismiss-button"
                                onClick={closeBottomDrawer}
                                role="button"
                            />
                            {children}
                        </Element>
                    </Element>
                </>
            )
        );
    }
);
