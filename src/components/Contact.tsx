// src/components/Contact.tsx
import React, { useRef } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name has to be at least 2 characters"
  }),
  email: z.string().email({ message: "Invalid email address" }),
  asunto: z.string().min(1, { message: "Subject is required" }),
  mensaje: z.string().min(1, { message: "Message is required" })
});

const defaultValues = {
  name: "",
  email: "",
  asunto: "",
  mensaje: ""
};

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (formData: z.infer<typeof formSchema>) => {
    if (!formRef.current) return;

    emailjs.sendForm(
      'service_3sl68hq', // replace with your EmailJS service ID
      'template_tl0ft2f', // replace with your EmailJS template ID
      formRef.current,
      'AaclBJOHWMOjE3xjH' // replace with your EmailJS public key
    ).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        // You might want to add a success message here
      },
      (error) => {
        console.log("Failed...", error.text);
        // You might want to add an error message here
      }
    );
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendEmail(values);
  };

  return (
    <div id='contact' className="min-h-screen pl-48 pt-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300">
        Contact Me
      </h1>
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 dark:bg-black/50 bg-white/50 pb-4 rounded-lg shadow-lg p-6 w-full max-w-3xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormDescription>
                  We will not share your email with anyone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormDescription>
                  Briefly describe your inquiry.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" rows={5} {...field} />
                </FormControl>
                <FormDescription>
                  Write your message here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-2 bg-primary-500 text-white font-bold rounded-md hover:bg-primary-800 transition-colors duration-300">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
