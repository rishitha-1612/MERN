import React from "react";
import type { Asset } from "./types";

interface AssetFormProps {
  onAdd: (asset: Asset) => void;
}

interface AssetFormState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetForm extends React.Component<
  AssetFormProps,
  AssetFormState
> {

  state: AssetFormState = {
    name: "",
    symbol: "",
    value: "",
    change: ""
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    this.setState({
      [e.target.name]: e.target.value
    } as Pick<
      AssetFormState,
      keyof AssetFormState
    >);
  };

  handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    this.props.onAdd({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change)
    });

    this.setState({
      name: "",
      symbol: "",
      value: "",
      change: ""
    });
  };

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name="symbol"
          placeholder="Symbol"
          value={this.state.symbol}
          onChange={this.handleChange}
        />

        <input
          name="value"
          placeholder="Value"
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input
          name="change"
          placeholder="Change"
          type="number"
          value={this.state.change}
          onChange={this.handleChange}
        />

        <button type="submit">
          Add Asset
        </button>

      </form>
    );
  }
}

export default AssetForm;