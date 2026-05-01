'use client'

import { authClient } from '@/lib/auth-client';
import {
  Button,
  Card,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField
} from '@heroui/react'
import React from 'react'
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {


  const handleSubmit =async (e) => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    const {data,error} = await authClient.signIn.email({
      email,password,
      callbackURL:'/'
    })
    if(!error){
      toast.success('User logged in successfully')
    }
  }

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider:'google'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200 bg-white">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to continue
          </p>
        </div>

        
        <Form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
        
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
              className="focus:ring-2 focus:ring-black/20"
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
                return 'Must contain 1 uppercase letter'
              }
              if (!/[0-9]/.test(value)) {
                return 'Must contain 1 number'
              }
              return null
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className="focus:ring-2 focus:ring-black/20"
            />
            <Description>
              At least 8 characters, 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <Separator className="flex-1" />
        </div>

       
        <Button
        variant='outline'
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-30 transition"
        >
          <FcGoogle />
          Continue with Google
        </Button>
      </Card>
    </div>
  )
}

export default LoginPage