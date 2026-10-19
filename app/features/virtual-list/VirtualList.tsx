import { useRef, useState } from "react";

export const VirtualList = ({
  data,
  maxHeight = 400,
  itemHeight = 40,
}: {
  data: { id: string; label: string }[];
  maxHeight?: number;
  itemHeight?: number;
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Total height of all items combined (so the scrollbar renders correctly)
  const totalHeight = data.length * itemHeight;

  // 2. Calculate visible window range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2); // buffer top
  const endIndex = Math.min(
    data.length,
    Math.ceil((scrollTop + maxHeight) / itemHeight) + 2, // buffer bottom
  );

  const visibleItems = data.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      style={{
        maxHeight: `${maxHeight}px`,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
    >
      {/* Spacer div to force correct scrollbar size */}
      <div
        style={{
          height: `${totalHeight}px`,
          width: "100%",
        }}
      >
        {/* Rendered window shifted to the correct scroll offset */}
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  height: `${itemHeight}px`,
                  padding: "10px",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
