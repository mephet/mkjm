import React from "react";
import { Table, InputNumber, Popconfirm, Form, Button } from "antd";
import { updateModelPortfolio } from "../../../actions/optimizationAction";
import { connect } from "react-redux";

const ModelPortfolioConfiguration = props => {
  const { l2AssetClassList, modelPortfolio, updateModelPortfolio } = props;

  const data = modelPortfolio;
  const EditableContext = React.createContext();

  class EditableCell extends React.Component {


    getInput = () => {
      return <InputNumber parser={value => value.replace('%', '') / 100} formatter={value => `${value * 100}%`} min={0} max={1} step={0.01} />;
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
      this.columns = Object.keys(modelPortfolio[0]).map(k => {
        return {
          title: k,
          dataIndex: k,
          width: k === "key" || k === "Fund Name" ? "4.5vw" : "7vw",
          editable: k === "key" || k === "Fund Name" ? false : true,
          fixed: k === "key" || k === "Fund Name" ? "left" : null
        };
      });
      this.columns.push(
        {
          title: "Grand Total",
          dataIndex: "Grand Total",
          width: "4vw",
          fixed: "right",
          render: (text, record) => {
            let rkeys = Object.keys(record);
            let total = 0;
            rkeys.forEach(key => {
              if (l2AssetClassList.includes(key)) {
                total += Number(record[key]);
                total = Number(total.toFixed(2))
              }
            });
            return (
              <h3 style={{ color: total === 1 ? "black" : "red" }}>
                {total * 100 + "%"}
              </h3>
            );
          }
        },
        {
          title: "operation",
          dataIndex: "operation",
          width: "5vw",
          fixed: "right",
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
          updateModelPortfolio(newData);
          this.setState({ editingKey: "" });
        } else {
          newData.push(row);
          updateModelPortfolio(newData);
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
    modelPortfolio: state.optimizationDetails.modelPortfolio,
    l2AssetClassList: state.optimizationDetails.l2AssetClassList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateModelPortfolio: newModel => dispatch(updateModelPortfolio(newModel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelPortfolioConfiguration);
