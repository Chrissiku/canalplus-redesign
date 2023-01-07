import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import { useForm } from "react-hook-form/dist/useForm";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

const login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      // await signIn(email, password)
    } else {
      // await signUp(email, password)
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Canal+ </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        alt="Bg image"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/jarixa"
        width={150}
        height={150}
        className="absolute left-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        className="relative mt-24 space-y-8 rounded bg-[#262a31bd] py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-5">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-medium  text-red-500">
                Oops, Enter a valid email!
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-medium  text-red-500">
                Your password must contain between 4 and 8 characters!
              </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Canal+?{" "}
          <button
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
