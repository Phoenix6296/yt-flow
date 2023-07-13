import { CountryCodeDropdown } from "./CountryCodeDropdown";
import { Tooltip } from "./Tooltip";
export const Input = ({
  value,
  defaultValue,
  label,
  placeholder,
  onFocus,
  onBlur,
  disabled,
  autoFocus,
  max,
  min,
  type,
  minLength,
  maxLength,
  onChange,
  className,
  required,
  containerStyles,
  pattern,
  focusStyles,
  reference,
  onInvalid,
  showTooltip,
  message,
  countryCode,
  setCountryCode,
  isCountry,
  onKeyDown,
  onPaste,
  toolTipPosition = "-top-20",
  contentEditable = true,
  bgColor,
  style,
  onClick,
  borderStyles,
}) => {
  return (
    <div className={containerStyles}>
      <div className="flex items-center gap-1">
        <label className={`text-base`} htmlFor={label}>
          {label}
        </label>
        {showTooltip ? (
          <Tooltip top={toolTipPosition} left="left-5" message={message} />
        ) : null}
      </div>
      <div className="flex items-center mt-2 gap-1">
        {isCountry ? (
          <CountryCodeDropdown
            value={countryCode}
            setValue={setCountryCode}
            bgColor={bgColor}
            onClick={onClick}
          />
        ) : null}
        <input
          onInvalid={onInvalid}
          ref={reference}
          autoFocus={autoFocus}
          className={`${className} ${disabled ? "cursor-not-allowed" : ""} ${
            focusStyles ? focusStyles : "focus:outline-none"
          } w-full ${
            borderStyles
              ? borderStyles
              : "border border-black border-opacity-10"
          } py-3 px-4 rounded-lg`}
          type={type}
          name={label}
          id={label}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          defaultValue={defaultValue}
          spellCheck={false}
          pattern={pattern}
          onPaste={onPaste}
          autoComplete="off"
          contentEditable={contentEditable}
          style={style}
        />
      </div>
    </div>
  );
};
