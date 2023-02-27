'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './index.module.css';

export interface ITextInput extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<ITextInput> = ({
  id = 'text',
  placeholder,
  className,
  value,
  onChange,
  error,
  errorMessage,
  ...props
}) => {
  const [fixLabelTop, setFixLabelTop] = useState(false);

  const renderError = () => {
    if (error) {
      return `${styles.shakeit} border-errorDark`;
    } else {
      return 'border-surface focus-within:border-secondaryDark bg-onSurfaceVariant';
    }
  };

  return (
    <>
      <div className={`${styles.container} ${renderError()} `}>
        <motion.label
          htmlFor={id}
          animate={{
            top: fixLabelTop ? '-2rem' : '0.5rem',
            left: fixLabelTop ? '-0.5rem' : '0.5rem',
            opacity: fixLabelTop ? '1' : '0.5',
            scale: fixLabelTop ? '0.8' : '1',
          }}
          transition={{ duration: 1, type: 'spring' }}
          className={`${styles.label} text-surfaceVariant`}
        >
          {placeholder}
        </motion.label>
        <input
          {...props}
          id={id}
          className={`${styles.input} ${className} text-surfaceVariant`}
          type="text"
          onChange={onChange}
          value={value}
          onFocus={(e) => e.target.value.trim() === '' && setFixLabelTop(true)}
          onBlur={(e) => e.target.value.trim() === '' && setFixLabelTop(false)}
        />
      </div>
      {error && (
        <p className={`${styles.errorMessage} text-error dark:text-errorDark`}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default TextInput;
