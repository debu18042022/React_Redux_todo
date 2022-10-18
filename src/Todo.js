import {
  Button,
  Card,
  Checkbox,
  Grid,
  Heading,
  Icon,
  Page,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import "./Style.css";
import { DeleteMinor } from "@shopify/polaris-icons";
import { connect } from "react-redux";
import { EditMajor } from "@shopify/polaris-icons";
import { mapDispatchToProps, mapStateToProps } from "./Connect";
import { ChecklistMajor } from "@shopify/polaris-icons";

const Todo = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const handleChange = useCallback((newValue) => setEnteredValue(newValue), []);
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState("");

  const [checked, setChecked] = useState(false);

  const AddItems = () => {
    props.add(enteredValue);
    setEnteredValue("");
  };

  const deleteItems = (e, index) => {
    props.del(index);
  };

  const Edit = (e, index) => {
    setEnteredValue(props.todoList[index].data);
    setFlag(true);
    setIndex(index);
  };

  const UpdateItems = () => {
    props.update(enteredValue, index);
    setFlag(false);
    setEnteredValue("");
  };

  const handleCheck = (flagValue, index) => {
    props.isChecked(flagValue, index);
  };
  console.log(props.todoList);

  return (
    <Page>
      {console.log(props.todoList)}
      <Heading>ToDo List</Heading>
      <TextField
        label="Add a Items"
        value={enteredValue}
        onChange={handleChange}
        autoComplete="off"
      />
      <br></br>
      <div style={{ textAlign: "center" }}>
        {flag ? (
          <Button primary onClick={UpdateItems}>
            Update
          </Button>
        ) : (
          <Button primary onClick={AddItems}>
            Add
          </Button>
        )}
      </div>
      <br></br>
      <Card>
        <div
          style={{
            textAlign: "start",
          }}
        >
          {props.todoList.map((item, index) => (
            <>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Card title="" sectioned>
                  <div className="container">
                    <div className="leftContainer">
                      {item.checked === true ? (
                        <>
                          <Checkbox
                            checked={true}
                            onChange={(e) => handleCheck(e, index)}
                          />
                          {console.log(item.cheked)}
                          <s>
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: "1.2rem",
                              }}
                            >
                              {item.data}
                            </span>
                          </s>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Checkbox
                            checked={checked}
                            onChange={(e) => handleCheck(e, index)}
                          />
                          <span
                            style={{
                              display: "inline-block",
                              fontSize: "1.2rem",
                            }}
                          >
                            {item.data}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="rigthContainer">
                      <Button
                        destructive
                        onClick={(e) => deleteItems(e, index)}
                      >
                        <Icon source={DeleteMinor} color="base" />
                      </Button>
                      <Button primary onClick={(e) => Edit(e, index)}>
                        <Icon source={EditMajor} color="base" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid.Cell>
              <br></br>
            </>
          ))}
        </div>
      </Card>
    </Page>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
