import React from "react";
import { msGraphService } from "../../services/microsoftGraphApi";
import "./OutlookViewer.css";
import OutlookEvent from "../OutlookEvent/OutlookEvent";

export default function OutlookViewer(props: any) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    msGraphService.list(props.accessToken).then((response) => {
      console.log(response);
      setEvents(response.value);
    });
  }, [props.accessToken]);

  return (
    <div className="outlook-viewer">
      {events &&
        events.map((event: any, index: number) => {
          const childProps = {
            index,
            event,
          };

          return <OutlookEvent {...childProps} />;
        })}
    </div>
  );
}
