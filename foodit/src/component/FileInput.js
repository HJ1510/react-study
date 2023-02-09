function FileInput({ name, value, onChange }) {
  const handleInputChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  return <input type="file" onChange={handleInputChange} />;
}

export default FileInput;
