import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
    // Aquí podrías enviar los datos del formulario a un servidor o realizar otras acciones.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-4 mt-6">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2 text-center">Tu Nombre</label>
        <input
          type="text"
          id="name"
          className=" p-2 w-full rounded-md focus:outline-none focus:border-black border-2 bg-gray-100 transition duration-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2 text-center">Tu Correo Electronico</label>
        <input
          type="email"
          id="email"
          className="p-2 w-full rounded-md focus:outline-none focus:border-black border-2 bg-gray-100 transition duration-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-medium text-gray-700 mb-2 text-center">Asunto</label>
        <input
          type="text"
          id="subject"
          className="p-2 w-full rounded-md focus:outline-none focus:border-black border-2 bg-gray-100 transition duration-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium text-gray-700 mb-2 text-center">Tu Mensaje</label>
        <textarea
          id="message"
          className="p-6 w-full rounded-md focus:outline-none focus:border-black border-2 bg-gray-100 transition duration-500" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-black/80 text-white font-medium py-2 px-4 rounded-md hover:bg-black/90 transition duration-500">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
