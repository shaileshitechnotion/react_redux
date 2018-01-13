import React , { Component } from 'react';
import {Input } from 'reactstrap';

export default class DropDown extends Component {
    render() {
      return (
        <Input type="select" name={this.props.name} id={this.props.id}>
            <option>--Select Group--</option>
            <option>Group 1</option>
            <option>Group 2</option>
            <option>Group 3</option>
            {/* {this.props.CityFillData
                    .map((item, i) => <option key={item.city_id} value={item.city_id}>{item.city_name}</option>)} */}
          </Input>
      )
    }
  }
  