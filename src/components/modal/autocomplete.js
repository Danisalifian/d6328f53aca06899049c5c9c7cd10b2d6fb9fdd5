import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputLocation } from "./modalLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  };

  onChange = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    let filteredOptions = options.filter((optionName) => {
      return (
        optionName.addressName.toLowerCase().indexOf(userInput.toLowerCase()) >
        -1
      );
    });

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (optionName) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: optionName.addressDetail,
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput.length > 2) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options mt-3">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li
                  className={className}
                  key={optionName.addressName}
                  onClick={() => onClick(optionName)}>
                  <div className="is-flex is-item-center">
                    <LocationOnIcon className="ml-2 color-sonic-silver" />
                    <div>
                      <strong className="font-bold text-lg color-charcoal ml-2">
                        {optionName.addressName}
                      </strong>
                      <h3 className="font-semibold text-md color-charcoal ml-2">
                        {optionName.addressDetail}
                      </h3>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="mt-3">
            <small className="text-lg font-bold color-charcoal">
              Tidak ditemukan!
            </small>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <InputLocation
            placeholder="Makan dimana ?"
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
