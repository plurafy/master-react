import { useState, type ReactNode } from "react";
import "./Accordion.css";

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-item">
      <h3 className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </h3>
      <div
        className="accordion-content-container"
        style={{ maxHeight: isOpen ? "100px" : "0" }}
      >
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  return (
    <div className="accordion-container">
      <AccordionItem title="Item 1">
        <p>This is the content for item 1.</p>
      </AccordionItem>
      <AccordionItem title="Item 2">
        <p>This is the content for item 2.</p>
      </AccordionItem>
      <AccordionItem title="Item 3">
        <p>This is the content for item 3.</p>
      </AccordionItem>
    </div>
  );
};
