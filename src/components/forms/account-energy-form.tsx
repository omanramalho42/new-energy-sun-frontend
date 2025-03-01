"use client"

import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"

import Image from 'next/image'

import axios from "axios"

import CustomFormField, { FormFieldType } from '@/components/custom-form-field'

import { FileUploader } from '@/components/file-upload'

import { Form, FormControl } from "@/components/ui/form"
import { toast } from "sonner"
import { Button } from '../ui/button'

import { formSchema } from '@/lib/validation'
import moment from 'moment'


const AccountEnergyForm:React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      file: []
    },
  })

  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const handleDecodedPdf = async (file: any) => {
    setLoadingFile(true);
  
    try {
      const response = await axios.post(
        "https://magic-pdf.solarium.newsun.energy/v1/magic-pdf",
        { file: file[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      return response.data;
    } catch (error: any) {
      console.error("Erro ao fazer upload do arquivo:", error);
    } finally {
      setLoadingFile(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const decodedPdf = 
      await handleDecodedPdf(values.file);
    
    const data = {
      ...values,
      units: [decodedPdf]
    }
    
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/app/lead`, data);
      toast.success('Success to submited lead.');
      toast("Lead has been created", {
        className: "text-white bg-gray-950",
        description: moment(new Date()).toString(),
      })
      form.reset();
    } catch (err: any) {
      toast.error("Error to send lead", {
        description: err.message
      })
      console.log(err)
    }
  }

  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-2"
      >
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="fullName"
          label='Full name'
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />

        {loadingFile ? (
          <div className="flex justify-center items-center p-4">
            <Image
              src="/assets/gifs/animation-loading.gif"
              width={300}
              height={300}
              className='object-contain'
              alt="Loading Logo"
            />
          </div>
        ) : (
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="file"
            label="Scanned Copy of energy account"
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploader
                  files={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            )}
          />
        )}

        <div className="flex flex-row gap-2 w-full justify-end items-center">
          <Button
            className="border border-1 border-green-600 text-green-600"
            variant="default"
            type='submit'
          >
            Submit
          </Button>
          <Button
            className="border border-1 border-red-600 text-red-600"
            variant="default"
            type='button'
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AccountEnergyForm