import React, { Component } from "react";
import pickService from "../../services/PickService";
import Select from "react-select";
import List from "../../constants";
import DatePicker from "react-datepicker";

const options = List;

export default class Modal extends Component {
  state = {
    pick: {
      description: "",
      stock: "",
      action: "",
      date: ""
    },
    errors: {},
    touch: {},
    select: {
      selectedOption: ""
    },
    startDate: new Date(),
  };

  handleSelectChange = selectedOption => {
    const newPick = {...this.state.pick, stock: selectedOption.value}
    this.setState({ pick: newPick }, () => console.info('PICK IS DIFFERENT => ', this.state.pick))
  };

  formatDate = (date = Date()) => {
    const pickedDate = new Date(date)
    return `${pickedDate.getMonth() + 1}-${pickedDate.getDate()}-${pickedDate.getFullYear()}`
  }

  handleDateChange = datetime => {
    const newPick = {...this.state.pick, date: this.formatDate(datetime)}
    this.setState({ pick: newPick, startDate: datetime })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      pick: {
        ...this.state.pick,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    pickService.createPick(this.state.pick);
  };

  render() {
    console.log(this.showModal)
    return (
      <div>
        {this.showModal}
      <form
        className="modal-dialog"
        role="document"
        onSubmit={this.handleSubmit}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Pick
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <Select
              name="stock"
              placeholder="Select a stock"
              onChange={this.handleSelectChange}
              options={options}
              value={this.state.select.selectedOption.value}
            />
            <p />
            Closing day of your prediction:{" "}
            <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
            <p />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio1"
                value="Down 0-2%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Down 0-2%
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio2"
                value="Down 2-5%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Down 2-5%
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio3"
                value="Down +5%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Down +5%
              </label>
              <br />
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio4"
                value="Up 0-2%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Up 0-2%
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio5"
                value="Up 2-5%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio4">
                Up 2-5%
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="action"
                id="inlineRadio6"
                value="Up +5%"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Up +5%
              </label>
            </div>
            <p />
            <textarea
              placeholder="Your prediction here..."
              type="textbox"
              className="textbox"
              name="description"
              onChange={this.handleChange}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => this.props.toggleModalVisibility()}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}
