import React from "react";
import "./index.scss";
import { Link45deg } from "react-bootstrap-icons";

export default function EventsCard() {
    
    return (
      <div className="events-container">
        <div className="events-title">Events</div>
        <div className="events-col">
          <div className="events-card">
            <div className="title">Title title</div>
            <div className="content">
              jkjkj dkjdkjfdj jfkdjfkdjkf kdjfkdjfkdjfk kdjfkdjfkdj
              dfkjdkjfkdjfd
            </div>
            <button className="btn">
              <Link45deg className="link-icon" />
            </button>
          </div>
          <div className="events-card">
            <div className="title">Title title</div>
            <div className="content">
              jkjkj dkjdkjfdj jfkdjfkdjkf kdjfkdjfkdjfk kdjfkdjfkdj
              dfkjdkjfkdjfd
            </div>
            <button className="btn">
              <Link45deg className="link-icon" />
            </button>
          </div>
          <div className="events-card">
            <div className="title">Title title</div>
            <div className="content">
              jkjkj dkjdkjfdj jfkdjfkdjkf kdjfkdjfkdjfk kdjfkdjfkdj
              dfkjdkjfkdjfd
            </div>
            <button className="btn">
              <Link45deg className="link-icon" />
            </button>
          </div>
        </div>
      </div>
    );
}