import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/store";

function ChooseFields({ isModal, setModal }) {
  const [textField, setTextField] = useState(false);
  const [numberField, setNumberField] = useState(false);
  const [dateField, setDateField] = useState(false);
  const [textAreaField, setTextAreaField] = useState(false);
  const [selectField, setSelectField] = useState(false);

  const { dispatch } = useContext(Context);
  const dispatchFunction = () => {
    dispatch({
      type: "UPDATE_USER_DATA",
      user_data: {
        text: textField,
        date: dateField,
        textarea: textAreaField,
        select: selectField,
        number: numberField,
        is_create: true,
      },
    });
    window.location.reload();
  };
  return (
    <MainContainer>
      {isModal ? <Overlay onClick={() => setModal(false)}></Overlay> : ""}

      <BackContainer style={{ transform: isModal && "scale(1,1)" }}>
        <Modal type="textarea">
          <CoverIn>
            <Cover>
              <Label>Text Field</Label>
              <Icon onClick={() => setTextField(!textField)}>
                {textField ? (
                  <i class="ri-subtract-line"></i>
                ) : (
                  <i class="ri-add-line"></i>
                )}
              </Icon>
            </Cover>
            <Cover>
              <Label>Number Field</Label>
              <Icon onClick={() => setNumberField(!numberField)}>
                {numberField ? (
                  <i class="ri-subtract-line"></i>
                ) : (
                  <i class="ri-add-line"></i>
                )}
              </Icon>
            </Cover>
            <Cover>
              <Label>Date Field</Label>
              <Icon onClick={() => setDateField(!dateField)}>
                {dateField ? (
                  <i class="ri-subtract-line"></i>
                ) : (
                  <i class="ri-add-line"></i>
                )}
              </Icon>
            </Cover>
            <Cover>
              <Label>Textarea Field</Label>
              <Icon onClick={() => setTextAreaField(!textAreaField)}>
                {textAreaField ? (
                  <i class="ri-subtract-line"></i>
                ) : (
                  <i class="ri-add-line"></i>
                )}
              </Icon>
            </Cover>
            <Cover>
              <Label>Select Field</Label>
              <Icon onClick={() => setSelectField(!selectField)}>
                {selectField ? (
                  <i class="ri-subtract-line"></i>
                ) : (
                  <i class="ri-add-line"></i>
                )}
              </Icon>
            </Cover>
          </CoverIn>
          <Button onClick={() => dispatchFunction()}>Submit</Button>
        </Modal>
      </BackContainer>
    </MainContainer>
  );
}
export default ChooseFields;

const BackContainer = styled.div`
  position: fixed;
  transition: 0.3s;
  transform: scale(0, 0);
  width: 100%;
  margin: 0 auto;
  right: 0;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0px;
`;
const Overlay = styled.div`
  background: rgba(21, 62, 126, 0.927);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0px;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  filter: blur(1px);
`;
const CoverIn = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const Label = styled.h3`
  color: rgb(21 62 126 / 93%);
  font-family: "inter_regular";
  margin-bottom: 10px;
  width: 50%;
`;
const Button = styled.div`
  background: #2382d4;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  width: 40%;
  /* max-width: 350px; */
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  transition: 0.5s;
  z-index: 101;
  border-radius: 5px;
  background: #fff;
  padding: 40px 0;
`;
const MainContainer = styled.div``;
const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-bottom: 1px solid grey;
`;
const Icon = styled.div`
  color: rgb(21 62 126 / 93%);
  font-size: 24px;
  cursor: pointer;
`;
