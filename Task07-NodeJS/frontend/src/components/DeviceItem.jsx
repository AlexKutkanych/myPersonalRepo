import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { removeDevice, switchOn, switchOff } from '../api';
import { devicePropType } from '../constants';

export default class DeviceItem extends PureComponent {
    handleDelete = async () => {
        const { device: { id }, onUpdate } = this.props;

        await removeDevice(id);
        onUpdate();
    };

    handleStateChange = async (e) => {
        const { device: { id }, onUpdate } = this.props;
        const newState = e.target.value;

        if (newState === 'on') {
            await switchOn(id);
        } else {
            await switchOff(id);
        }

        onUpdate();
    };

    render() {
        const { index, device } = this.props;
        const { id, name, address, port, groupName, state } = device;

        return (
            <tr key={id}>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{address}:{port}</td>
                <td>
                  <span className="badge badge-pill badge-success">{groupName}</span>
                </td>
                <td className="text-right">
                    <div className="btn-group btn-group-toggle mr-2" role="group" data-toggle="buttons">
                        <label className={`btn btn-outline-primary ${state === 'on' ? 'active' : ''}`}>
                            <input type="radio"
                                   name="state"
                                   id="on"
                                   autoComplete="off"
                                   onChange={this.handleStateChange}
                                   value="on"
                                   checked={state === 'on'}/> On
                        </label>

                        <label className={`btn btn-outline-primary ${state === 'off' ? 'active' : ''}`}>
                            <input type="radio"
                                   name="state"
                                   id="off"
                                   autoComplete="off"
                                   onChange={this.handleStateChange}
                                   value="off"
                                   checked={state === 'off'}/> Off
                        </label>
                    </div>

                    <div className="btn-group" role="group">
                        <a href={`#/devices/log/${id}`} className="btn btn-outline-secondary">Log</a>
                        <a href={`#/devices/edit/${id}`} className="btn btn-outline-secondary">Edit</a>
                        <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    }
}

DeviceItem.defaultProps = {
    onUpdate: () => {
    }
};

DeviceItem.propTypes = {
    device: devicePropType.isRequired,
    index: PropTypes.number.isRequired,
    onUpdate: PropTypes.func
};