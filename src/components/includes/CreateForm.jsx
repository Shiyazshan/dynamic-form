import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import ChooseFields from "./modal/ChooseFields";
import { Context } from "../context/store";
import { Link } from "react-router-dom";

function CreateForm() {
  //state
  const [isModal, setModal] = useState(false);

  // fetching data from the store
  const {
    state: { user_data },
  } = useContext(Context);

  const textfield = user_data.text;
  const numberfield = user_data.number;
  const selectfield = user_data.select;
  const datefield = user_data.date;
  const textareafield = user_data.textarea;
  const isCreate = user_data.is_create;

  return (
    <Container>
      <Title>Create Form</Title>
      <RouteInfo>
        <CoverInfo>
          <Form>
            <CoverAdd>
              <General>General</General>
              <AddField onClick={() => setModal(true)}>Add Field</AddField>
            </CoverAdd>
            {textfield && (
              <CoverIn>
                <Label>Text Field*</Label>
                <Input type="text" disabled />
              </CoverIn>
            )}
            {numberfield && (
              <CoverIn>
                <Label>Number Field*</Label>
                <Input type="number" disabled />
              </CoverIn>
            )}
            {datefield && (
              <CoverIn>
                <Label>Date Field*</Label>
                <Input type="date" disabled />
              </CoverIn>
            )}
            {textareafield && (
              <CoverIn>
                <Label>Text Area Field*</Label>
                <textarea name="" id="" cols="30" rows="10" disabled></textarea>
              </CoverIn>
            )}
            {selectfield && (
              <CoverIn>
                <Label>Select Field*</Label>
                <Select disabled>
                  <Option>A</Option>
                  <Option>B</Option>
                  <Option>C</Option>
                  <Option>D</Option>
                </Select>
              </CoverIn>
            )}
          </Form>
        </CoverInfo>
        {isCreate && <Create to="/view">Create</Create>}
      </RouteInfo>
      <ChooseFields isModal={isModal} setModal={setModal} />
    </Container>
  );
}

export default CreateForm;

const Create = styled(Link)`
  background: #2382d4;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  margin: 0 auto;
`;
const CoverAdd = styled.div``;
const Option = styled.option``;
const AddField = styled.div`
  background: #2382d4;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dadada;
  height: 100vh;
`;
const RouteInfo = styled.div`
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #dfe8ed;
  border-radius: 8px;
  padding: 30px;
  width: 70%;
  margin: 0 auto;
`;
const Title = styled.h2`
  color: #0a0a0a;
  margin-bottom: 20px;
  font-size: 26px;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 10px;
`;
const Button = styled.div`
  width: 170px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2382d4;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.cancel {
    background-color: #fff;
    border: 1px solid #2382d4;
    color: #2382d4;
    margin-right: 20px;
  }
`;
const SubmitButton = styled.input`
  width: 170px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2382d4;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.cancel {
    background-color: #fff;
    border: 1px solid #2382d4;
    color: #2382d4;
    margin-right: 20px;
  }
`;
const Form = styled.form``;
const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 5px;
  text-align: right;
  width: 100%;
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const CoverInfo = styled.div``;
const General = styled.h3`
  color: #0a0a0a;
  position: relative;
  overflow: hidden;
  font-size: 22px;
  margin-bottom: 30px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 100px;
    background-color: #ebebeb;
    bottom: 10px;
  }
  &.veh {
    margin-top: 30px;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 260px;
      bottom: 10px;
      background-color: #ebebeb;
    }
  }
`;
const CoverForm = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const CoverIn = styled.div`
  width: 100%;
  margin-right: 20px;
  margin-bottom: 30px;
  &:nth-child(even) {
    margin-right: 0;
  }
  position: relative;
  &.add {
    width: 100%;
  }
`;
const Label = styled.h3`
  color: #747474;
  font-family: "inter_regular";
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  background-color: #f4f5f8;
  border: 1px solid #dfe8ed;
  height: 60px;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 5px;
  &.auto {
    color: #adadad;
  }
  &.file {
    height: 120px;
    opacity: 0;
  }
`;
const Select = styled.select`
  width: 100%;
  background-color: #f4f5f8;
  border: 1px solid #dfe8ed;
  height: 60px;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 5px;
  outline: none;
  &.auto {
    color: #adadad;
  }
`;
const Icon = styled.div`
  color: #292c2d;
  position: absolute;
  right: 20px;
  top: 53px;
  cursor: pointer;
  @media all and (max-width: 400px) {
    right: 20px;
    top: 38px;
  }
`;
