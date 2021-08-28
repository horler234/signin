import styled from "styled-components";

export const SignCard = styled.div`
  position: relative;
  background: #fff;
  overflow: hidden;
  padding: 44px;
  width: 100%;

  @media (min-width: 600px) {
    min-width: 320px;
    min-height: 338px;
    max-width: 440px;
    width: calc(100% - 40px);
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  }
`;

export const HeaderText = styled.h1`
  line-height: 1.75rem;
  color: #1b1b1b;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const MainForm = styled.form`
  input {
    margin-bottom: 16px;
    padding: 6px 10px;
    border: none;
    width: 100%;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    height: 36px;
    outline: none;
    background-color: transparent;
    padding-left: 0;
  }

  a {
    margin-bottom: 16px;
    color: #0067b8;
    font-size: 0.8125rem;
    text-decoration: none;
    display: block;
    &:hover {
      text-decoration: underline;
      color: #666;
    }
  }
`;

export const SubmitBtn = styled.div`
  position: relative;
  width: 100%;
  height: 40px;

  button {
    position: absolute;
    right: 0;
    bottom: 0;
    min-height: 32px;
    min-width: 108px;
    border: none;
    color: #fff;
    font-size: 0.9375rem;
    padding: 4px 12px;
    line-height: 1.25rem;
    background-color: #0067b8;
    display: block;
    cursor: pointer;
  }
`;

export const EmailDisplay = styled.div`
  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 2px;
    border: transparent;
    background: #fff;
    transition: all 0.6s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  margin-top: 16px;
  margin-bottom: -4px;
  font-size: 0.9375rem;
  line-height: 24px;
  display: flex;
`;
