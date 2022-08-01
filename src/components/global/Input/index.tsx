import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

function Label({
  label,
  subLabel,
  required,
}: {
  label: string;
  subLabel?: string;
  required?: boolean;
}) {
  return (
    <div className="input-label w-full flex items-center justify-between">
      <div className="flex items-center col-gap-s">
        {required && <p className="required">*</p>}
        {label && <p className="label">{label}</p>}
      </div>
      {subLabel && <p className="sub-label">{subLabel}</p>}
    </div>
  );
}

function CheckBox({
  className,
  required,
  checked,
  onChange,
  name,
  disabled,
  label,
}: {
  className?: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (newValue: boolean) => void;
  name?: string;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`checkbox ${className} flex items-center justify-start col-gap`}
    >
      <input
        type="checkbox"
        required={required}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        name={name}
        disabled={disabled}
      />
      {label && <p className="label">{label}</p>}
    </div>
  );
}

function Input({
  type,
  HTMLtype,
  placeholder,
  required,
  name,
  value,
  onChange,
  disabled,
  className,
  classNameContainer,
  error,
  label,
  subLabel,
  options,
  minLength,
  maxLength,
}: {
  type: string;
  HTMLtype?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string | boolean;
  onChange?: (newValue: string | boolean) => void;
  disabled?: boolean;
  className?: string;
  classNameContainer?: string;
  error?: string | null;
  label?: string;
  subLabel?: string;
  options?: string[];
  minLength?: number;
  maxLength?: number;
}) {
  switch (type) {
    case "textarea":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <textarea
            className={`w-full ${className} ${error ? "error" : ""}`}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value as string}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
          ></textarea>
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "select":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <select
            value={value as string}
            className={`react-select w-full ${className} ${
              error ? "error" : ""
            }`}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
          >
            {options &&
              options.map((option: string, i: number) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
          </select>
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "file":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type="file"
            required={required}
            name={name}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            disabled={disabled}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "checkbox":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          <CheckBox
            className={`w-full ${className} ${error ? "error" : ""}`}
            required={required}
            checked={value as boolean}
            onChange={onChange}
            name={name}
            disabled={disabled}
            label={label}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "phone":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <PhoneInput
            country={"ma"}
            placeholder={placeholder}
            inputProps={{
              name: name,
              required: required,
              disabled: disabled,
              minLength: minLength,
              maxLength: maxLength,
            }}
            value={value as string}
            onChange={onChange}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "date":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type="date"
            required={required}
            value={value as string}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    default:
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {label && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type={HTMLtype}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value as string}
            onChange={(e) => onChange && onChange(e.target.value)}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
  }
}

export default Input;
