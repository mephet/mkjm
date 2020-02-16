import React from "react";
import { Table, Input, InputNumber, Popconfirm, Form } from "antd";
import { connect } from "react-redux";

const FundDataConfiguration = props => {
  const { l2AssetClassList, fundList } = props.optimizationState;
  console.log(fundList);

  const data = fundList;
  const EditableContext = React.createContext();

  class EditableCell extends React.Component {
    getInput = () => {
      if (this.props.inputType === "number") {
        return <InputNumber />;
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
      this.columns = Object.keys(fundList[0]).map(k => {
        return {
          title: k,
          dataIndex: k,
          width: "5vw",
          editable: k === "key" || k === "Fund Name" ? false : true,
          fixed: k == "key" || k === "Fund Name" ? "left" : null
        };
      });
      this.columns.push(
        {
          title: "Grand Total",
          dataIndex: "Grand Total",
          width: "4vw",
          fixed: 'right',
          render: (text, record) => {
            let rkeys = Object.keys(record);
            let total = 0;
            rkeys.forEach(key => {
              if (l2AssetClassList.includes(key)) {
                total += Number(record[key])
              }
            })
            return <h1>{total}</h1>;
          }
        },
        {
          title: "operation",
          dataIndex: "operation",
          width: "4vw",
          fixed: "right",
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="Sure to cancel?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <a
                disabled={editingKey !== ""}
                onClick={() => this.edit(record.key)}
              >
                Edit
              </a>
            );
          }
        }
      );
    }

    isEditing = record => record.key === this.state.editingKey;

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
          console.log(newData);
          this.setState({ data: newData, editingKey: "" });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: "" });
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
            inputType: col.dataIndex === "age" ? "number" : "text",
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record)
          })
        };
      });

      return (
        <EditableContext.Provider value={this.props.form}>
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel
            }}
            scroll={{ x: "1500" }}
          />
        </EditableContext.Provider>
      );
    }
  }

  const EditableFormTable = Form.create()(EditableTable);
  return <EditableFormTable />;
};

const mapStateToProps = state => {
  return {
    optimizationState: state.optimizationDetails
  };
};

export default connect(mapStateToProps)(FundDataConfiguration);
