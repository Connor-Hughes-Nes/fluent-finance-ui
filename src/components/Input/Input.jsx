import React, { createRef, useMemo } from 'react';

import './input.scss';

export const Input = ({
  id,
  name,
  label,
  onChange,
  value
  // hidden
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

  return (
    <div className="input">
      <fieldset ref={wrapperRef} className="input__input-wrapper">
        <input
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
