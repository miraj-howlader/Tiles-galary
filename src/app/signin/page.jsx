'use client'

import {
  Button,
  Card,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from '@heroui/react'
import React from 'react'

const SigninPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200 bg-white">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create Account 🚀</h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>

          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input
              placeholder="Enter your name"
              className="focus:ring-2 focus:ring-black/20 rounded-lg"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Profile Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="focus:ring-2 focus:ring-black/20 rounded-lg"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address'
              }
              return null
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              className="focus:ring-2 focus:ring-black/20 rounded-lg"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }
              if (!/[A-Z]/.test(value)) {
                return 'Must include 1 uppercase letter'
              }
              if (!/[0-9]/.test(value)) {
                return 'Must include 1 number'
              }
              return null
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className="focus:ring-2 focus:ring-black/20 rounded-lg"
            />
            <Description>
              At least 8 characters, 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

         

          {/* Button */}
          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Register
          </Button>

        </Form>

      </Card>
    </div>
  )
}

export default SigninPage