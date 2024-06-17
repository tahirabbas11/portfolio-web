"use client";

import { TextInput, Textarea, Button, Container } from "@mantine/core";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { LineWave } from "react-loader-spinner";

export default function ContactForm({ Page }: { Page: string }) {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      message: isNotEmpty("Message is required"),
      email: isEmail("Invalid email address"),
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitContactForm = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setIsLoading(true);
    const currentTheme =
      (localStorage.getItem("mantine-color-scheme-value") as string | null) ||
      "dark";
    try {
      const response = await axios.post("/api/email", values);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been sent!",
        background: currentTheme === "dark" ? "#2E2E2E" : "white",
        confirmButtonColor: "#EAB305",
        color: currentTheme === "dark" ? "white" : "black",
      }).then(() => {
        setIsLoading(false);
        form.reset();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
        background: currentTheme === "dark" ? "#2E2E2E" : "white",
        confirmButtonColor: "#EAB305",
        color: currentTheme === "dark" ? "white" : "black",
      }).then(() => {
        setIsLoading(false);
        form.reset();
      });
    }
  };

  const currentTheme =
    (localStorage.getItem("mantine-color-scheme-value") as string | null) ||
    "dark";

  return (
    <div className="space-y-4">
      {Page != "get-in-touch" && (
        <h2 className="text-2xl font-bold lg:text-4xl">Contact Me</h2>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.onSubmit(handleSubmitContactForm)();
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput
            // label="Name"
            placeholder="Name"
            radius="md"
            size="md"
            withAsterisk
            key={form.key("name")}
            {...form.getInputProps("name")}
            // error={form.errors.name}
            classNames={{
              input: "bg-white dark:bg-[#2E2E2E] placeholder-gray-400",
            }}
          />
          <TextInput
            // label="Email"
            placeholder="Email"
            type="email"
            radius="md"
            size="md"
            withAsterisk
            {...form.getInputProps("email")}
            error={form.errors.email}
            classNames={{
              input: "bg-white dark:bg-[#2E2E2E] placeholder-gray-400",
            }}
          />
        </div>
        <Textarea
          //   label="Message"
          placeholder="Write your message"
          radius="md"
          size="md"
          rows={4}
          withAsterisk
          {...form.getInputProps("message")}
          error={form.errors.message}
          classNames={{
            input: "bg-white dark:bg-[#2E2E2E] placeholder-gray-400",
          }}
        />
        <Button
          type="submit"
          fullWidth
          className="bg-yellow-500 hover:bg-yellow-600"
          disabled={isLoading}
        >
          {isLoading && (
            <LineWave
              visible={true}
              height="38px"
              width="100"
              color={currentTheme === "dark" ? "white" : "black"}
              ariaLabel="line-wave-loading"
              wrapperStyle={{}}
              wrapperClass=""
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          )}
          {!isLoading && "Submit"}
        </Button>
      </form>
    </div>
  );
}
