import React, { useState } from 'react';

import './modal.scss';

const Modal = ({ hideCreateForm }) => {
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideCreateForm}>
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Write title..."
              className="event-form__field"
              maxLength="38"
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                // onChange={this.handleChange}
              />
              <span>-</span>
              <input type="time" name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Type description..."
              className="event-form__field event-form__desc"
              maxLength="190"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
