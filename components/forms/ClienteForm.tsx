"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { set } from "zod/v4-mini"
import { create } from "domain"
import { useRouter } from "next/navigation"
export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}


const ClienteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      nombre: "",
      correo: "",
      phone: "",
    },
  })

  async function onSubmit({nombre, correo, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try{
      //const userData ={ nombre, correo, phone}

      //const user = await createUser(userData);
      
      //if(user) router.push(`/clientes/${user.$id}/register`)

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="nombre" 
          label="Nombre Completo"
          placeholder="Su nombre completo"
          iconSrc="/assets/icons/icon.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="correo" 
          label="Correo Electrónico"
          placeholder="masterclean@limpieza.com"
          iconSrc="/assets/icons/mail.svg"
          iconAlt="correo"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone" 
          label="Numero de Teléfono"
          placeholder="6621680516"
          iconSrc="/assets/icons/phone.svg"
          iconAlt="cell"
        />
        <SubmitButton isLoading={isLoading}>Agendar</SubmitButton>
      </form>
    </Form>
  )
}

export default ClienteForm
