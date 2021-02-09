import React from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { Accordion, Card, Button, Image } from "react-bootstrap";

export default function Menu() {
  //const decoratedOnClick = useAccordionToggle(eventKey, onClick);
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Toggle
        as={Button}
        variant="link"
        eventKey="1"
        className="acordion"
      >
        <img src="/assets/icons/menu.svg" className="h-comp menuIcon"></img>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="1">
        <Card.Body className="cardBody">
          <hr></hr>

          <div className="toggleMenu">
            <span as={Button}>
              <img src="./assets/icons/filters.svg" className="filterIcon" />
              Filtes
            </span>
            <span>
              <img src="./assets/icons/map.svg" className="filterIcon" />
              Maps
            </span>
            <span>Sort by:</span>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}
