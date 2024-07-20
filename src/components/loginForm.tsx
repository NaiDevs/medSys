"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import User from '@/icons/user';

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      router.push("/pacientes")
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      // Manejar errores de inicio de sesión (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-sky-500">
        <div className='bg-white p-5 rounded-xl w-[400px] shadow-lg shadow-black grid gap-6'>
            <div className='flex justify-center'>
                <User />
            </div>
            <h1 className='text-3xl font-bold text-center'>Inicio de Sesión</h1>
            <form className='grid gap-5' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label htmlFor="" className='font-semibold text-lg'>Usuario:</label>
                    <input type="text" id="username" name='username' value={username} onChange={(e) => setUsername(e.target.value)}className='border border-solid border-slate-500 text-md px-4 py-2 rounded-md'/>
                </div>
                <div className='grid'>
                <label htmlFor="" className='font-semibold text-lg'>Contraseña:</label>
                <input type="password"  id="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-solid border-slate-500 text-md px-4 py-2 rounded-md'/>
                </div>
                <div className='grid gap-3'>
                    <button className='bg-sky-600 px-4 py-2 text-center w-full rounded-lg text-white font-semibold hover:bg-[#024767] transition-all' type='submit'>Iniciar Sesión</button>
                    <a href="#" className='text-center font-semibold text-lg'>Olvide mi Contraseña</a>
                </div>
            </form>
        </div>
    </div>
  );
}
