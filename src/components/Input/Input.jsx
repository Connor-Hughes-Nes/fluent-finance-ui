import React, { createRef, useMemo } from 'react';

import './input.scss';

export const Input = ({
  id,
  name,
  label,
  onChange,
  type,
  value,
  prefix,
  // min_value,
  // max_value
}) => {
  const wrapperRef = createRef();

  const getValueChange = (name, value) => (name ? { [name]: value } : value);

  const memoLabel = useMemo(() => {
    return label;
  }, [label]);

  const handleChange = (e) => {
    let val = e.target.value;
    val = getValueChange(name, val);
    onChange(val);
  };

  const renderPrefix = (prefix) =>
    prefix && (
      <div className="input__prefix">
        <span>{prefix}</span>
      </div>
    );

  return (
    <div className="input">
      <fieldset ref={wrapperRef} className="input__input-wrapper">
        {renderPrefix(prefix)}
        <input
          type={type}
          id={id ?? name}
          onChange={handleChange}
          name={name}
          value={value}
          placeholder={memoLabel}
          // hidden={hidden}
        />
      </fieldset>
    </div>
  );
};
