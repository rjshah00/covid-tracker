import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Infobox.css";

function Infobox({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecodary" className="infobox__title">
          {title}
        </Typography>
        <h2 className="infobox__cases">{cases}</h2>
        <Typography color="textSecondary" className="infobox_total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
