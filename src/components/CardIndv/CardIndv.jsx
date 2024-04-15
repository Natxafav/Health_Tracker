import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import "./cardIndv.css";

const CardIndv = ({ item }) => {
  const date = new Date(item.datetime);
  const year = date.getFullYear(item.datetime);
  const month = (date.getMonth(item.datetime) + 1)
    .toLocaleString()
    .padStart(2, "0");
  const day = date.getDate(item.datetime).toLocaleString().padStart(2, "0");
  const time = `${date.getHours(item.datetime).toLocaleString()
    .padStart(2, "0")}:${date
    .getMinutes(item.datetime)
    .toLocaleString()
    .padStart(2, "0")}:00`;

  const dateEnd = new Date(item.end);
  const yearnd = dateEnd.getFullYear(item.end);
  const monthnd = (dateEnd.getMonth(item.end) + 1)
    .toLocaleString()
    .padStart(2, "0");
  const daynd = dateEnd.getDate(item.end).toLocaleString().padStart(2, "0");
  const timend = `${dateEnd.getHours(item.end).toLocaleString()
  .padStart(2, "0")}:00:${dateEnd
    .getMinutes(item.end)
    .toLocaleString()
    .padStart(2, "0")}:00`;

  const createMessage = (item) => {
    let message = "";
    if (item.locate) {
      message += `Location: ${item.locate}. `;
    }

    if (item.name) {
      message += ` Name: ${item.name}. `;
    }
    if (item.datetime) {
      const date = new Date(item.datetime);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const formattedTime = `${date.getHours().toLocaleString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toLocaleString()
        .padStart(2, "0")}`;
      message += ` Time: ${formattedTime}. `;
    }

    if (item.specialist) {
      message += `Specialist: ${item.specialist}. `;
    }

    if (item.posology) {
      message += `Posology: ${item.posology}. `;
    }

    if (item.description) {
      message += `Description: ${item.description}. `;
    }

    return message.trim();
  };
  const speakMessage = (item) => {
    const message = createMessage(item);

    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
  };

  return (
    <Card
      className="cardIndvContai"
      sx={{ borderRadius: "20px", width: "900px", marginBottom: "20px" }}
      onClick={() => speakMessage(item)}
    >
      <CardHeader
        title="Tasks"
        sx={{ color: "white", backgroundColor: "rgb(7, 150, 151)" }}
      />

      <CardContent className="fields" sx={{ color: "black" }}>
        {item.locate && <p>{item.locate}</p>}
        {item.name && <p>Name: {item.name}</p>}
        {item.datetime && <p id="start">Start: {time}</p>}
        {item.specialist && <p>{item.specialist}</p>}
        {item.posology && <p id="posology">Posology: {item.posology}</p>}
        {item.end && <p id="end">End: {timend}</p>}
        {item.description && <p>description: {item.description}</p>}
      </CardContent>
    </Card>
  );
};

export default CardIndv;
