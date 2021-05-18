import React, { useMemo } from 'react';
import currencies from '../../data/currencies';

interface Props {
  onChange: (value: string) => void;
}

const Select: React.FC<Props> = ({ onChange }) => {
  const values = useMemo(
    () =>
      Object.entries(currencies).map(([code, name]) => (
        <option value={code} key={code}>
          {code} - {name}
        </option>
      )),
    []
  );

  return (
    <select onChange={e => onChange(e.target.value)} className="select">
      <option value="">Select a Currency</option>
      {values}
    </select>
  );
};

export default Select;
