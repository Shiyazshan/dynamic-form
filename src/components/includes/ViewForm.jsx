import React, { useContext, useEffect, useState } from "react";

//imports
import "sweetalert2/dist/sweetalert2.css";

//packages
import { styled } from "styled-components";
import { Context } from "../context/store";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function ViewForm() {
  const [inputs, setInputs] = useState([]);

  // fetching data from the store
  const {
    state: { user_data },
  } = useContext(Context);

  const textfield = user_data.text;
  const numberfield = user_data.number;
  const selectfield = user_data.select;
  const datefield = user_data.date;
  const textareafield = user_data.textarea;

  const navigate = useNavigate();

  const [newItems] = useDebounce(inputs, 1000);
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newInput = {
      name,
      value,
    };
    setInputs((prevState) => [...prevState, newInput]);
  };

  const submittedData = () => {
    console.log(newItems, "submitted data");
    navigate("/");
    if (newItems.length == 0) {
      showErrorMsg();
    } else {
      showSuccessAlert();
    }
  };
  //showing a error modal
  const showErrorMsg = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter values",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#0e2d5e",
    });
  };
  //showing a success modal
  const showSuccessAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully submited",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#0e2d5e",
    });
  };

  return (
    <Container>
      <RouteInfo>
        <CoverInfo>
          <Form onSubmit={(e) => submittedData(e)}>
            <CoverAdd>
              <General>View Form</General>
            </CoverAdd>
            {textfield && (
              <CoverIn>
                <Label>Text Field*</Label>
                <Input
                  type="text"
                  name="text"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </CoverIn>
            )}
            {numberfield && (
              <CoverIn>
                <Label>Number Field*</Label>
                <Input
                  type="number"
                  required
                  name="number"
                  onChange={(e) => handleChange(e)}
                />
              </CoverIn>
            )}
            {datefield && (
              <CoverIn>
                <Label>Date Field*</Label>
                <Input
                  type="date"
                  required
                  name="date"
                  onChange={(e) => handleChange(e)}
                />
              </CoverIn>
            )}
            {textareafield && (
              <CoverIn>
                <Label>Text Area Field*</Label>
                <textarea
                  required
                  id=""
                  cols="30"
                  rows="10"
                  name="textarea"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </CoverIn>
            )}
            {selectfield && (
              <CoverIn>
                <Label>Select Field*</Label>

                <Select
                  name="select"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <Option name="selected" value="A">
                    A
                  </Option>
                  <Option name="selected" value="B">
                    B
                  </Option>
                  <Option name="selected" value="C">
                    C
                  </Option>
                  <Option name="selected" value="D">
                    D
                  </Option>
                </Select>
              </CoverIn>
            )}
            <Create type="submit" value="Submit" />
          </Form>
        </CoverInfo>
      </RouteInfo>
    </Container>
  );
}

const Create = styled.input`
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
  width: 50%;
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
