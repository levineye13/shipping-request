import React from 'react';

const useForm = <S extends {}>(
  initialState: S,
  onSubmit?: (state: S) => void
) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, handleSubmit, handleReset };
};

export { useForm };
