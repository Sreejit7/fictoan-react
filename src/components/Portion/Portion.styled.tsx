import styled from "styled-components";

export const PortionStyled = styled.div`
    &.horizontal { 
        display        : flex;
        flex-direction : row;
    }

    &.\\31 { grid-column : span 1; }

    &.one-twelfth,
    &.\\32 { grid-column : span 2; }

    &.one-eighth,
    &.\\33 { grid-column : span 3; }

    &.one-sixth,
    &.\\34 { grid-column : span 4; }

    &.\\35 { grid-column : span 5; }

    &.one-fourth,
    &.\\36 { grid-column : span 6; }

    &.\\37 { grid-column : span 7; }

    &.one-third,
    &.\\38 { grid-column : span 8; }

    &.\\39 { grid-column : span 9; }

    &.five-twelfth,
    &.\\31 0 { grid-column : span 10; }

    &.\\31 1 { grid-column : span 11; }

    &.half,
    &.\\31 2 { grid-column : span 12; }

    &.\\31 3 { grid-column : span 13; }

    &.seven-twelfth,
    &.\\31 4 { grid-column : span 14; }

    &.\\31 5 { grid-column : span 15; }

    &.two-third,
    &.\\31 6 { grid-column : span 16; }

    &.\\31 7 { grid-column : span 17; }

    &.three-fourth,
    &.\\31 8 { grid-column : span 18; }

    &.\\31 9 { grid-column : span 19; }

    &.five-sixth,
    &.\\32 0 { grid-column : span 20; }

    &.seven-eighth,
    &.\\32 1 { grid-column : span 21; }

    &.eleven-twelfth,
    &.\\32 2 { grid-column : span 22; }

    &.\\32 3 { grid-column : span 23; }

    &.whole,
    &.\\32 4 { grid-column : span 24; }



    @media all and (max-width : 600px) {

        &.\\31 -on-mobile { grid-column : span 1; }

        &.one-twelfth-on-mobile,
        &.\\32 -on-mobile { grid-column : span 2; }

        &.one-eighth-on-mobile,
        &.\\33 -on-mobile { grid-column : span 3; }

        &.one-sixth-on-mobile,
        &.\\34 -on-mobile { grid-column : span 4; }

        &.\\35 -on-mobile { grid-column : span 5; }

        &.one-fourth-on-mobile,
        &.\\36 -on-mobile { grid-column : span 6; }

        &.\\37 -on-mobile { grid-column : span 7; }

        &.one-third-on-mobile,
        &.\\38 -on-mobile { grid-column : span 8; }

        &.\\39 -on-mobile { grid-column : span 9; }

        &.five-twelfth-on-mobile,
        &.\\31 0-on-mobile { grid-column : span 10; }

        &.\\31 1-on-mobile { grid-column : span 11; }

        &.half-on-mobile,
        &.\\31 2-on-mobile { grid-column : span 12; }

        &.\\31 3-on-mobile { grid-column : span 13; }

        &.seven-twelfth-on-mobile,
        &.\\31 4-on-mobile { grid-column : span 14; }

        &.\\31 5-on-mobile { grid-column : span 15; }

        &.two-third-on-mobile,
        &.\\31 6-on-mobile { grid-column : span 16; }

        &.\\31 7-on-mobile { grid-column : span 17; }

        &.three-fourth-on-mobile,
        &.\\31 8-on-mobile { grid-column : span 18; }

        &.\\31 9-on-mobile { grid-column : span 19; }

        &.five-sixth-on-mobile,
        &.\\32 0-on-mobile { grid-column : span 20; }

        &.seven-eighth-on-mobile,
        &.\\32 1-on-mobile { grid-column : span 21; }

        &.eleven-twelfth-on-mobile,
        &.\\32 2-on-mobile { grid-column : span 22; }

        &.\\32 3-on-mobile { grid-column : span 23; }

        &.whole-on-mobile,
        &.\\32 4-on-mobile { grid-column : span 24; }
    }



    @media all and (min-width : 601px) and (max-width : 900px) {

        &.\\31 -on-tablet-portrait { grid-column : span 1; }

        &.one-twelfth-on-tablet-portrait,
        &.\\32 -on-tablet-portrait { grid-column : span 2; }

        &.one-eighth-on-tablet-portrait,
        &.\\33 -on-tablet-portrait { grid-column : span 3; }

        &.one-sixth-on-tablet-portrait,
        &.\\34 -on-tablet-portrait { grid-column : span 4; }

        &.\\35 -on-tablet-portrait { grid-column : span 5; }

        &.one-fourth-on-tablet-portrait,
        &.\\36 -on-tablet-portrait { grid-column : span 6; }

        &.\\37 -on-tablet-portrait { grid-column : span 7; }

        &.one-third-on-tablet-portrait,
        &.\\38 -on-tablet-portrait { grid-column : span 8; }

        &.\\39 -on-tablet-portrait { grid-column : span 9; }

        &.five-twelfth-on-tablet-portrait,
        &.\\31 0-on-tablet-portrait { grid-column : span 10; }

        &.\\31 1-on-tablet-portrait { grid-column : span 11; }

        &.half-on-tablet-portrait,
        &.\\31 2-on-tablet-portrait { grid-column : span 12; }

        &.\\31 3-on-tablet-portrait { grid-column : span 13; }

        &.seven-twelfth-on-tablet-portrait,
        &.\\31 4-on-tablet-portrait { grid-column : span 14; }

        &.\\31 5-on-tablet-portrait { grid-column : span 15; }

        &.two-third-on-tablet-portrait,
        &.\\31 6-on-tablet-portrait { grid-column : span 16; }

        &.\\31 7-on-tablet-portrait { grid-column : span 17; }

        &.three-fourth-on-tablet-portrait,
        &.\\31 8-on-tablet-portrait { grid-column : span 18; }

        &.\\31 9-on-tablet-portrait { grid-column : span 19; }

        &.five-sixth-on-tablet-portrait,
        &.\\32 0-on-tablet-portrait { grid-column : span 20; }

        &.seven-eighth-on-tablet-portrait,
        &.\\32 1-on-tablet-portrait { grid-column : span 21; }

        &.eleven-twelfth-on-tablet-portrait,
        &.\\32 2-on-tablet-portrait { grid-column : span 22; }

        &.\\32 3-on-tablet-portrait { grid-column : span 23; }

        &.whole-on-tablet-portrait,
        &.\\32 4-on-tablet-portrait { grid-column : span 24; }
    }



    @media all and (min-width : 901px) and (max-width : 1200px) {
        /* .row:not(.retain-layout-on-tablet-landscape) > &:not([class*='on-tablet-landscape']) { grid-column : span 24; } */

        &.\\31 -on-tablet-landscape { grid-column : span 1; }

        &.one-twelfth-on-tablet-landscape,
        &.\\32 -on-tablet-landscape { grid-column : span 2; }

        &.one-eighth-on-tablet-landscape,
        &.\\33 -on-tablet-landscape { grid-column : span 3; }

        &.one-sixth-on-tablet-landscape,
        &.\\34 -on-tablet-landscape { grid-column : span 4; }

        &.\\35 -on-tablet-landscape { grid-column : span 5; }

        &.one-fourth-on-tablet-landscape,
        &.\\36 -on-tablet-landscape { grid-column : span 6; }

        &.\\37 -on-tablet-landscape { grid-column : span 7; }

        &.one-third-on-tablet-landscape,
        &.\\38 -on-tablet-landscape { grid-column : span 8; }

        &.\\39 -on-tablet-landscape { grid-column : span 9; }

        &.five-twelfth-on-tablet-landscape,
        &.\\31 0-on-tablet-landscape { grid-column : span 10; }

        &.\\31 1-on-tablet-landscape { grid-column : span 11; }

        &.half-on-tablet-landscape,
        &.\\31 2-on-tablet-landscape { grid-column : span 12; }

        &.\\31 3-on-tablet-landscape { grid-column : span 13; }

        &.seven-twelfth-on-tablet-landscape,
        &.\\31 4-on-tablet-landscape { grid-column : span 14; }

        &.\\31 5-on-tablet-landscape { grid-column : span 15; }

        &.two-third-on-tablet-landscape,
        &.\\31 6-on-tablet-landscape { grid-column : span 16; }

        &.\\31 7-on-tablet-landscape { grid-column : span 17; }

        &.three-fourth-on-tablet-landscape,
        &.\\31 8-on-tablet-landscape { grid-column : span 18; }

        &.\\31 9-on-tablet-landscape { grid-column : span 19; }

        &.five-sixth-on-tablet-landscape,
        &.\\32 0-on-tablet-landscape { grid-column : span 20; }

        &.seven-eighth-on-tablet-landscape,
        &.\\32 1-on-tablet-landscape { grid-column : span 21; }

        &.eleven-twelfth-on-tablet-landscape,
        &.\\32 2-on-tablet-landscape { grid-column : span 22; }

        &.\\32 3-on-tablet-landscape { grid-column : span 23; }

        &.whole-on-tablet-landscape,
        &.\\32 4-on-tablet-landscape { grid-column : span 24; }
    }
`;
