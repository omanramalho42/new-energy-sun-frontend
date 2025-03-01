import React from 'react'

import { Control } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'

import Image from 'next/image'
import { Input } from './ui/input'
import { E164Number } from "libphonenumber-js/core"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Checkbox } from './ui/checkbox'

export enum FormFieldType {
  INPUT = 'input',
  FILE = 'file',
  TEXTAREA = 'textarea',
  PHONE_INPUT = "phoneInput",
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

interface CustomFormFieldProps {
  label?: string
  placeholder?: string
  iconSrc?: string
  iconAlt?: string
  disabled?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
  fieldType: FormFieldType
  name: string
  control: Control<any>
}

const RenderField = ({ field, props }: { field: any; props: CustomFormFieldProps}) => {
  const {
    fieldType,
    placeholder,
    iconAlt,
    iconSrc,
    renderSkeleton
  } = props

  switch(fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className='ml-2'
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className='bg-gray-950 text-white placeholder:text-dark-600 border-dark-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 border-0'
            />
          </FormControl>
        </div>
      )
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="BR"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      )
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton
      (field) : null
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      )
    default:
      break
  }
}

const CustomFormField: React.FC<CustomFormFieldProps> = (props) => {
  const {
    control,
    fieldType,
    name,
    label
  } = props
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className='text-white'>
              {label}
            </FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className='shad-error' />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField