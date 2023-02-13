import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ChildAbout from "./child";
import DemoUseReducer from "./demoUseReducer";
import CustomHooks from "./custom-hooks";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.primary ? "blue" : "palevioletred")};
`;

export default function AboutPage() {
  const [number, setNumber] = useState(0);
  const listUser = [
    { id: 1, name: "Nguyen", age: 18 },
    { id: 2, name: "Hau", age: 28 },
  ];

  const listUserMemo = useMemo(() => listUser, []);

  const countUp = () => {
    let i = 0;
    while (i < 1000) {
      i++;
    }
    console.log(i);
    return i;
  };

  const countUpMemo = useMemo(() => countUp(), []);

  const renderNoti = () => {
    console.log("renderNoti");
  };

  const renderNotiCallback = useCallback(renderNoti, []);

  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
        <Title primary>Cybersoft</Title>
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
        ></Button>
        <Title>Number: {number}</Title>
        <Title>Number Up: {countUpMemo}</Title>
        <Button
          type="primary"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Click
        </Button>
        <hr />
        <ChildAbout renderNoti={renderNotiCallback} />
        <hr />
        <DemoUseReducer />
        <hr />
        <CustomHooks />
      </Wrapper>
    </div>
  );
}
