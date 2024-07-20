"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import User from '@/icons/user';

export default function LoginForm() {
  const router = useRouter();



  return (
    <div className="h-screen flex items-center justify-center bg-sky-500">
        <div className='bg-white p-5 rounded-xl w-[400px] shadow-lg shadow-black grid gap-6'>
            <div className='flex justify-center'>
                <User />
            </div>
            <h1 className='text-3xl font-bold text-center'>Inicio de Sesión</h1>
            <form className='grid gap-5'>
                <div className='grid'>
                    <label htmlFor="" className='font-semibold text-lg'>Usuario:</label>
                    <input type="text" className='border border-solid border-slate-500 text-md px-4 py-2 rounded-md'/>
                </div>
                <div className='grid'>
                <label htmlFor="" className='font-semibold text-lg'>Contraseña:</label>
                <input type="password" className='border border-solid border-slate-500 text-md px-4 py-2 rounded-md'/>
                </div>
                <div className='grid gap-3'>
                    <button className='bg-sky-600 px-4 py-2 text-center w-full rounded-lg text-white font-semibold hover:bg-[#024767] transition-all'>Iniciar Sesión</button>
                    <a href="#" className='text-center font-semibold text-lg'>Olvide mi Contraseña</a>
                </div>
            </form>
        </div>
    </div>
  );
}
