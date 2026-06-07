import { Range } from "react-range";

const FilterRange = ({ values, setValues }) => {
  return (
    <Range
      step={10}
      min={0}
      max={1000}
      values={values}
      onChange={setValues}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#CCCCCC",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "22px",
            width: "22px",
            borderRadius: "50%",
            backgroundColor: "#2CB1BA",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-35px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#2CB1BA",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            {values[index]} €
          </div>
        </div>
      )}
    />
  );
};
export default FilterRange;
