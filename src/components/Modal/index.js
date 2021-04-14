import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div id="result-modal" className="modal">
        <div className="modal-inner p-10">
          <div className="modal-close">
            <svg className="result-modal__close-button" viewbox="0 0 40 40">
              <path className="close-x result-modal__close-button" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
          {this.props.container}
        </div>
      </div>
    );
  }
}
