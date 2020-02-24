import React from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";
import { updateClientPortfolio } from "../../../actions/optimizationAction";
import { connect } from "react-redux";

const ClientHoldingsConfiguration = props => {
  const { l2AssetClassList, clientPortfolio, updateClientPortfolio } = props;

  const rowKeys = Object.keys(clientPortfolio[0]);
  const data = clientPortfolio;
  const EditableContext = React.createContext();

  class EditableCell extends React.Component {
    getInput = () => {
      if (this.props.inputType === "number") {
        return <InputNumber parser={value => value.replace('%', '') / 100} formatter={value => `${value * 100}%`} min={0} max={1} step={0.01} />;
      }
      return <Input />;
    };

    renderCell = ({ getFieldDecorator }) => {
      const {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item style={{ margin: 0 }}>
              {getFieldDecorator(dataIndex, {
                rules: [
                  {
                    required: true,
                    message: `Please Input ${title}!`
                  }
                ],
                initialValue: record[dataIndex]
              })(this.getInput())}
            </Form.Item>
          ) : (
              children
            )}
        </td>
      );
    };

    render() {
      return (
        <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
      );
    }
  }

  class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data, editingKey: "" };
      this.columns = rowKeys.map(k => {
        return {
          title: k,
          dataIndex: k,
          editable: k === "key" ? false : true
        };
      });
      this.columns.push(
        {
          title: "operation",
          dataIndex: "operation",
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <Button onClick={() => this.save(form, record.key)}>
                      Save
                    </Button>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="Are you sure you want to delete this record?"
                  onConfirm={() => this.delete(record.key)}
                >
                  <Button>Delete</Button>
                </Popconfirm>
                <Popconfirm
                  title="Sure to cancel?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <Button>Cancel</Button>
                </Popconfirm>
              </span>
            ) : (
                <Button
                  disabled={editingKey !== ""}
                  onClick={() => this.edit(record.key)}
                >
                  Edit
              </Button>
              );
          }
        }
      );
    }

    isEditing = record => record.key === this.state.editingKey;

    add = () => {
      const { data } = this.state;
      const newData = [...data, { key: data.length }];
      updateClientPortfolio(newData);
    };

    delete = key => {
      const dataSource = [...this.state.data];
      const newData = dataSource.filter(item => item.key !== key);
      updateClientPortfolio(newData);
      this.setState({
        editingKey: ""
      });
    };

    cancel = () => {
      this.setState({ editingKey: "" });
    };

    save(form, key) {
      form.validateFields((error, row) => {
        if (error) {
          return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row
          });
          updateClientPortfolio(newData);
          this.setState({ editingKey: "" });
        } else {
          newData.push(row);
          updateClientPortfolio(newData);
          this.setState({ editingKey: "" });
        }
      });
    }

    edit(key) {
      this.setState({ editingKey: key });
    }

    render() {
      const components = {
        body: {
          cell: EditableCell
        }
      };

      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex === "Fund Allocation" ? "number" : "text",
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record)
          })
        };
      });

      return (
        <EditableContext.Provider value={this.props.form}>
          <Button
            onClick={this.add}
            type="primary"
            style={{ marginBottom: 16 }}
          >
            Add a row
          </Button>
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel
            }}
          />
        </EditableContext.Provider>
      );
    }
  }

  const EditableFormTable = Form.create()(EditableTable);
  return <EditableFormTable />;
};

const mapDispatchToProps = dispatch => {
  return {
    updateClientPortfolio: newPortfolio =>
      dispatch(updateClientPortfolio(newPortfolio))
  };
};

const mapStateToProps = state => {
  return {
    l2AssetClassList: state.optimizationDetails.l2AssetClassList,
    clientPortfolio: state.optimizationDetails.clientPortfolio
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientHoldingsConfiguration);
