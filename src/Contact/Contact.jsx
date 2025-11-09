import React from "react";
import { Form, Input, Button } from "antd";

function Contact() {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    alert("Message sent! Check console for data.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Form
        name="contact"
        layout="vertical"
        onFinish={onFinish}
        className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-gray-700 pb-4">
          Contact Me
        </h2>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            className="bg-gray-800 text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Your Name"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            className="bg-gray-800 text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Your Email"
          />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter a message!" }]}
        >
          <Input.TextArea
            rows={5}
            className="bg-gray-800 text-white rounded-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Your Message"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition"
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact;
