import clsx from "clsx";
import InputScaffold from "./InputScaffold";
import ReactSelect from "react-select";
import "../style/select.css";

/**
 *
 * @param {SelectProps} props
 */
function Select(props) {
  const {
    className,
    fullWidth,
    prefix,
    suffix,
    size,
    gutterBottom,
    label,
    ...rest
  } = props;

  return (
    <InputScaffold
      className={clsx("Select", className)}
      {...{ fullWidth, prefix, suffix, size, gutterBottom, label }}
    >
      <ReactSelect
        className={clsx("Select__select")}
        styles={selectStyles}
        {...rest}
      />
    </InputScaffold>
  );
}

export default Select;

/**
 * @type {import('react-select').StylesConfig}
 */
const selectStyles = {
  control: () => ({
    backgroundColor: "transparent",
    borderWidth: 0,
    display: "flex",
    items: "center",
    padding: "4px 0px",
    cursor: "text",
  }),
  indicatorSeparator: () => ({}),
};

/**
 * @typedef {import('./InputScaffold').InputScaffoldProps & import('react').ComponentPropsWithRef<typeof ReactSelect>} SelectProps
 */
