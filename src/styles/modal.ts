import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;


    div {
        background: #fff;
        padding: 40px;
        color: green;
    }
`;