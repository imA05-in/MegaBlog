import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toggleloginStatus } from "../store/authSlice";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  async function create(data) {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) dispatch(toggleloginStatus(userData));
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="flex items-center justify-self-center ">
      <div className="mx-auto w-full max-w-lg bg-gray-100 text-black rounded-xl p-10 border-black/10 ">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign Up to create an account
        </h2>
        <p>
          Already have an account?
          <Link to="/login">Login In</Link>
        </p>
        {error && <p className="text-red-600 text-center mt-8">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name: "
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <Input
              label={`email: `}
              placeholder="email"
              {...register("email", { required: true })}
            />
            <Input
              label={`password`}
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <Button type="submit" className="w-full">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
