import { useEffect, useState, useId } from "react";
import "./FilterSelect.css";

export const FilterSelect = ({
  options = [],
  multiple = false,
}: {
  options: Array<{ id: string; label: string }>;
  multiple?: boolean;
}) => {
  const id = useId();
  const [showList, setShowList] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement>,
    optionId: string,
  ) => {
    if (multiple) {
      setSelectedOptions((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId],
      );
    } else {
      setSelectedOptions([optionId]);
    }

    if (!e.metaKey && !e.ctrlKey) {
      setShowList(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`#${id}`)) {
        setShowList(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div id={id} className="select-container">
      <label htmlFor={`filter-${id}`} className="select-label">
        {multiple ? "Multiple" : "Single"} Select
      </label>
      <input
        id={`filter-${id}`}
        type="text"
        className="select-filter"
        placeholder="Filter options..."
        onFocus={() => setShowList(true)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setShowList(false);
          }
        }}
      />
      <div className="selected-options">
        {selectedOptions.map((id) => {
          const option = options.find((opt) => opt.id === id);
          return option ? (
            <span key={id} className="selected-option">
              {option.label}
            </span>
          ) : null;
        })}
      </div>
      {showList && (
        <ul className="select-options">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className={`select-option ${selectedOptions.includes(option.id) ? "selected" : ""}`}
              onClick={(e) => handleClick(e, option.id)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
