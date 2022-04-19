import clsx from 'clsx';
import './InputScaffold.css';

/**
 *
 * @param {InputScaffoldProps} props
 */
function InputScaffold(props) {
  const {
    prefix,
    suffix,
    label,
    fullWidth,
    className,
    children,
    size,
    gutterBottom,
    helperText,
    error,
    ...rest
  } = props;
  return (
    <div
      className={clsx('InputScaffold', className, {
        'InputScaffold--fullWidth': fullWidth,
        'InputScaffold--gutter-bottom': gutterBottom,
      })}
      {...rest}
    >
      {!!label && <span className="InputScaffold__label">{label}</span>}
      <div
        className={clsx('InputScaffold__input', {
          'InputScaffold__input--small': size === 'small',
          'InputScaffold__input--medium': size === 'medium',
          'InputScaffold__input--large': size === 'large',
        })}
      >
        {!!prefix && <div className="self-center">{prefix}</div>}
        {children}
        {!!suffix && <div className="self-center">{suffix}</div>}
      </div>
      {!!helperText && (
        <p className={clsx('text-small text-muted', !!error && 'text-danger')}>
          {helperText}
        </p>
      )}
    </div>
  );
}

InputScaffold.defaultProps = {
  size: 'medium',
};

export default InputScaffold;

/**
 * @typedef {{
 * prefix: import("react").ReactNode;
 * suffix: import("react").ReactNode;
 * label: string;
 * fullWidth: boolean;
 * size: 'medium' | 'large' | number;
 * gutterBottom: boolean;
 * helperText: string;
 * error: boolean
 * } & import('react').ComponentPropsWithoutRef<'div'>} InputScaffoldProps
 */
