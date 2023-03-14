import React from "react";
import "./OutlookEvent.css";

export default function OutlookEvent(props: any) {
  const [update, setUpdate] = React.useState(false);
  const [event, setEvent] = React.useState<any>({});

  return (
    <div className="outlook-event">
      <p>Subject: {props.event.subject}</p>
      <p>Preview: {props.event.bodyPreview}</p>
      <p>Start: {props.event.start.dateTime}</p>
      <p>End: {props.event.end.dateTime}</p>
      <p>Location: {props.event.location.displayName}</p>
    </div>
  );
}
