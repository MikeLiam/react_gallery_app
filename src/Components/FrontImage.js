import React, { Component } from 'react'

class FrontImage extends Component {

    /**
     * Handler for next, prev & close onclick button
     * @param {Object} e onClick object event
     */
    handleButtons = (e) => {
        // Event delegation from elements with tags button or insider strong and I (arrows)
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'STRONG' || e.target.tagName === 'I') {
            // Get closest button element
            const button = e.target.closest('button')
            // set default vars
            let target = null;
            let show = true;
            let action;
            let id = this.props.id
            // set action
            if (button.id === "modal-prev-btn") {
                action = "prev";
            } else if (button.id === "modal-next-btn") {
                action = "next";
            } else {
                action = "close";
                // if close action get closest modal div container for close it
                target = button.closest('div.modal-container');
                show = false;
                id = null;
            }
            // Call main App handler function
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