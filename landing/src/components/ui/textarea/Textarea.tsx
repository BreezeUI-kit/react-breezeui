import React, { TextareaHTMLAttributes, useId, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
}

/**
 * Textarea component for multiline input.
 * Styled using Tailwind.
 * @param props - React textarea element props
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, success, className, ...props }, ref) => {
    const id = useId();
    const helperId = `${id}-helper`;

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          aria-describedby={helperText ? helperId : undefined}
          aria-invalid={error ? 'true' : 'false'}
          className={cn(
            'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all',
            error
              ? 'border-red-600 focus:ring-red-600'
              : success
                ? 'border-green-600 focus:ring-green-600'
                : 'border-gray-300 focus:ring-blue-600',
            className
          )}
          {...props}
        />
        {helperText && (
          <p
            id={helperId}
            className={cn(
              'text-xs',
              error
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-700 dark:text-gray-400'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
