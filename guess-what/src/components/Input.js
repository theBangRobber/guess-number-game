function Input({ value, onChange, label }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
