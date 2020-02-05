import { css } from "styled-components";

export const ResetStyled = css`
    /*  RESET  ============================================================  */
    /*  Consider removing this if you have
    a zillion elements in your page  */
    *,
    *:before,
    *:after { box-sizing : border-box; }

    *:focus { outline : 0; }

    /* This affects all type scale values */
    html { font-size : $baseFontSize; }

    body {
        -moz-osx-font-smoothing : grayscale;
        -webkit-font-smoothing : antialiased;
    }

    /* Basics */
    body, button, input, select, textarea {
        font-family : BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    img {
        display : block;
        width   : 100%;
    }

    a { text-decoration : none; }

    button {
        border  : 0;
        outline : 0;
    }

    /* Input fields */
    ::-webkit-input-placeholder { opacity : 0.5; }
    ::-moz-placeholder { opacity : 0.5; }

    input { outline : none; }

    input[type="number"] {
        -webkit-appearance : none;
        -moz-appearance : none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        margin             : 0;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    /* input:-webkit-autofill { box-shadow : 0 0 0 5000px white inset; } */
    /* input:-webkit-autofill { box-shadow : 0 1px 2px hsla( 0, 100%, 0, .08) inset; } */

    /* :-webkit-autofill, */
    /* :-webkit-autofill:hover, */
    /* :-webkit-autofill:focus { box-shadow : 0 0 0 5000px white inset; } */

    input[type="date"]::-webkit-inner-spin-button { display : none; }

    input[type="date"]::-webkit-calendar-picker-indicator { opacity : 0; }

    progress[value],
    progress::-webkit-progress-value,
    progress[value]::-webkit-progress-bar {
        border             : none;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    *:disabled {
        user-select    : none;
        pointer-events : none;
    }

    /* Option select */
    select {
        border-radius      : 0;
        -webkit-appearance : none;
        -moz-appearance : none;
    }


    /* List items */
    ul, li {
        margin     : 0;
        padding    : 0;
        list-style : none;
    }

    /* Details and Summary */
    ::-webkit-details-marker { display : none; }

    details > summary:first-of-type { list-style-type : none; }

    /* Code */
    pre, code {
        margin    : 0;
        max-width : 100%;
    }

    /* Tables */
    table { border-collapse : collapse; }

    th {
        font-weight : unset;
        text-align  : unset;
    }

    /* For custom radio buttons */
    input[type="radio"] { display : none; }
`