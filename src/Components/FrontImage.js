import React, { Component } from 'react'

class FrontImage extends Component {

    handleButtons = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'STRONG' || e.target.tagName === 'I') {
            const button = e.target.closest('button')
            let target = null;
            let show = true;
            let action;
            let id = this.props.id
            console.log("Front Image click button --> ", id)
            if (button.id === "modal-prev-btn") {
                action = "prev";
            } else if (button.id === "modal-next-btn") {
                action = "next";
            } else {
                action = "close";
                target = button.closest('div.modal-container');
                show = false;
                id = null;
            }
            this.props.handleImage(target, show, action, id);
        }
    }

render() {
    return (
        <div className="modal-container" onClick={(e) => this.handleButtons(e)}>
            <div className="modal" style={{backgroundImage: `url(${this.props.src})`}}>
                <button type="button" id="modal-close-btn" className="modal-close-btn" ><strong>X</strong></button>
                <button type="button" id="modal-prev-btn" className="modal-arrow-btn prev"  ><i className="modal-arrow left"></i></button>
                <button type="button" id="modal-next-btn"  className="modal-arrow-btn next" ><i className="modal-arrow right"></i></button>
            </div>
        </div>
    );
}
}

export default FrontImage;