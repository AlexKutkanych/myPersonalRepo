import React, { Component } from 'react';
import './styles.scss';

class Cube extends Component {
    render() {
        return (
            <div class="cube-wrapper">
                <div class="cube">
                    <span class="cube__facet cube__facet_facet1">ЦСБО</span>
                    <span class="cube__facet cube__facet_facet2">ЦСБО</span>
                    <span class="cube__facet cube__facet_facet3">ЦСБО</span>
                    <span class="cube__facet cube__facet_facet4">ЦСБО</span>
                    <span class="cube__facet cube__facet_facet5">ЦСБО</span>
                    <span class="cube__facet cube__facet_facet6">ЦСБО</span>
                </div>
            </div>
        );
    }
}

export default Cube;
