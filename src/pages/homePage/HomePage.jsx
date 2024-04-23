import React from 'react'
import codeImg from '../../assets/background-home.jpg'
import Card from './component/Card';
export default function HomePage() {
    let icon = "test"
    let title = "test"
    let text = "test de faire un text la l aa la kkndik dqsjdqjsdnq jqsdqn"
  return (
    <div className="bg-color-primaire ">
      <div className="relative">
        <img
          src={codeImg}
          alt=""
          className="h-auto w-full brightness-50 filter"
        />
        <div className="bg-color-primaire absolute left-0 top-0 h-full w-full  opacity-70"></div>
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <p className="py-4 text-xl font-bold text-white">Bienvenue !</p>
          <h1 className="text-5xl font-bold text-white">
            Je suis développeur web
          </h1>
          <p className="py-6 text-xl font-bold text-white">
            Si vous avez besoin contacter moi
          </p>
          <button className="rounded-md border bg-blue-600 px-6 py-2 text-xl font-bold text-white hover:border hover:border-blue-500 hover:bg-transparent hover:text-white">
            Contact
          </button>
        </div>
      </div>
      <div className='flex justify-around'>
        <Card icon={icon} title={title} text={text} />
        <Card icon={icon} title={title} text={text} />
        <Card icon={icon} title={title} text={text} />
      </div>
    </div>
  );
}
