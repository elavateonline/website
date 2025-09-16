'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef, CSSProperties } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-bg-input-background border-border-input-border text-text-primary focus:ring-bg-primary-background',
        dark: 'bg-bg-accent-light border-border-border-secondary text-text-white focus:ring-bg-primary-background',
        light: 'bg-bg-secondary-background border-border-border-light text-text-primary focus:ring-bg-primary-background',
      },
      size: {
        small: 'text-xs px-3 py-2',
        medium: 'text-sm px-4 py-3',
        large: 'text-md px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_top?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "Sunday, Sept 14, 2025",
  text_font_size = "text-sm",
  text_font_family = "Nunito Sans",
  text_font_weight = "font-normal",
  text_line_height = "leading-normal",
  text_text_align = "left",
  text_color = "text-text-white-muted",
  fill_background_color = "bg-accent-light",
  border_border_top = "2px solid border-border-secondary",
  border_border_radius = "rounded-lg",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  type = 'text',
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Parse border_border_top for border styling
  const borderTopClass = border_border_top ? 'border-t-2 border-t-solid border-t-border-border-secondary' : ''

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    !variant ? borderTopClass : '',
    border_border_radius,
  ].filter(Boolean).join(' ')

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={customStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
})

EditText.displayName = 'EditText'

export default EditText