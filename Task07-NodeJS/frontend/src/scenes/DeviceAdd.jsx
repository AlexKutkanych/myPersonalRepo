import React, { PureComponent } from 'react';
import DeviceForm from '../components/DeviceForm';
import { addDevice, getGroups } from '../api';

export default class DeviceAdd extends PureComponent {
    state = {
        groups: []
    };

    componentDidMount = async () => {
      this.setState({
          groups: await getGroups()
      });
  };

    handleFormSubmit = async (device) => {
        await addDevice(device);
        window.history.back();
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                                <li className="breadcrumb-item"><a href="#/devices">Devices</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Add device</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <DeviceForm onSubmit={this.handleFormSubmit} groups={this.state.groups} />
                    </div>
                </div>
            </div>
        );
    }
}