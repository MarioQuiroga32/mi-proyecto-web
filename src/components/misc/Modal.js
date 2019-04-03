import React, { Component } from "react";
import pickService from "../../services/PickService";
import Select from "react-select";
import Calendar from "./DatePicker";
import List from "../../constants";

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
      selectedOption: null
    }
  };

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      pick: {
        ...this.state.pick,
        [name]: value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
      pickService.createPick(this.state.pick);
    }
  


  render() {
    return (
      <form className="modal-dialog" role="document" onSubmit={this.handleSubmit} >
        <div className="modal-content">
          <div className="modal-header">

            <h5 className="modal-title" id="exampleModalLabel">Pick</h5> 

            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>  

          </div>

          <div className="modal-body">

            <Select placeholder="Select a stock" onChange={this.handleSelectChange} options={options}/>

            <p />

            Closing day of your prediction: <Calendar />

            <p />

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio1" value="Down 0-5%" onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio1">Down 0-5%</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio2" value="Down 5-10%" onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio2">Down 5-10%</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio3" value={this.state.pick.action} onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio3">Down +10%</label> 
              <br />
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio4" value={this.state.pick.action} onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio3">Up 0-5%</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio5" value={this.state.pick.action} onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio4">Up 5-10%</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="action" id="inlineRadio6" value={this.state.pick.action} onChange={this.handleChange}/>
              <label class="form-check-label" htmlFor="inlineRadio3">Up +10%</label>
            </div>

            <p />
            <textarea placeholder="Your prediction here..." type="textbox" className="textbox" name="description" onChange={this.handleChange}/>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Post</button>
          </div>

        </div>
      </form>
    );
  }
}
