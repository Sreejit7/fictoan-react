import styled from "styled-components";

export const RowStyled = styled.div`
    .row {
        display               : grid;
        width                 : 100%;
        grid-gap              : 16px;
        grid-template-columns : repeat(24, 1fr);
        margin-bottom         : 4vh;
    }

    @media all and (max-width : 720px) {
        .row { grid-gap : 8px; }
    }

    .row.huge-gutters   { grid-gap : $measureFixed*4; }
    .row.large-gutters  { grid-gap : $measureFixed*3; }
    .row.medium-gutters { grid-gap : $measureFixed*2; }
    .row.small-gutters  { grid-gap : $measureFixed; }
    .row.tiny-gutters   { grid-gap : $measureFixed/2; }
    .row.no-gutters     { grid-gap : 0; }

    .side-padding-tiny {
        padding-left  : 4vw;
        padding-right : 4vw;
    }

    .side-padding-small {
        padding-left  : 8vw;
        padding-right : 8vw;
    }

    .side-padding-medium {
        padding-left  : 12vw;
        padding-right : 12vw;
    }

    .side-padding-large {
        padding-left  : 18vw;
        padding-right : 18vw;
    }

    .side-padding-huge {
        padding-left  : 24vw;
        padding-right : 24vw;
    }

    @media all and (max-width : 600px) {
        *[class*="side-padding-"] {
            padding-left  : 6vw;
            padding-right : 6vw;
        }
    }
`