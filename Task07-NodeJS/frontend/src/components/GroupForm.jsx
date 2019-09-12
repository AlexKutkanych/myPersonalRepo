import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { groupPropType } from '../constants';

export default class GroupForm extends PureComponent {
    handleCancelClick = () => {
        window.history.back();
    };

    handleSubmit = e => {
        const target = e.target;
        const selectedDevices = this.getSelectedValues();
        this.props.onSubmit({
            ...this.props.group,
            name: target.groupName.value,
            devices: selectedDevices,
        });

        e.preventDefault();
    };

    getSelectedValues = () => {
      const selected = document.querySelectorAll('#devices input:checked');
      return Array.from(selected).map(item => {
        return {
          id: item.id,
          deviceName: item.dataset.name,
          state: this.getDevicesState(item.id)
        }
      });
    }

    checkIfDeviceRelatesToGroup = deviceId => {
      const { group: { devices } } = this.props;
      const device = devices.filter(({ id }) => deviceId === id);
      return device.length ? true : false;
    }

    getDevicesState = deviceId => {
      const { devices } = this.props;
      return devices.find(({ id }) => id === deviceId).state;
    }

    render() {
        const { group, devices, pageType } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="groupName">Group Name</label>
                    <input type="text"
                           className="form-control"
                           id="groupName"
                           name="groupName"
                           placeholder="Group Name"
                           required
                           defaultValue={group.name}/>
                </div>
                  <div className="form-group" id="devices">
                    <label htmlFor="groupName">Select devices</label>
                    {devices.length ? devices.map(({ id, name }) => {
                        return (
                          <div className="form-check" key={id}>
                            {pageType === 'group-add' ?
                            <input
                                type="checkbox"
                                id={id}
                                aria-label="Checkbox for following text input"
                                name="devices"
                                className="form-check-input"
                                data-name={name}
                              /> : 
                              <input
                                type="checkbox"
                                id={id}
                                aria-label="Checkbox for following text input"
                                name="devices"
                                className="form-check-input"
                                data-name={name} 
                                defaultChecked={this.checkIfDeviceRelatesToGroup(id)}
                              />}
                            <label htmlFor={id} className="form-check-label">{name}</label>
                          </div>)
                      }) : <p className="text-info">Go to <a href="#/devices">Devices page</a> to add your first device</p>
                    }
                </div> 
              
                <div className="float-right">
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Cancel</button>
                </div>
            </form>
        );
    }
}

GroupForm.defaultProps = {
    group: {
        name: '',
    }
};

GroupForm.propTypes = {
  group: groupPropType,
  onSubmit: PropTypes.func.isRequired
};