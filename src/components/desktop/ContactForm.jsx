import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo, setTipo] = useState('');
  const [superficie, setSuperficie] = useState('');
  const [presupuesto, setPresupuesto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, telefono, message, tipo, superficie, presupuesto });
    // Aquí podrías enviar los datos del formulario a un servidor o realizar otras acciones.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-4 mx-auto mt-6 bg-white">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-center text-gray-700">Nombre</label>
        <input
          type="text"
          id="name"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-center text-gray-700">Correo electronico</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telefono" className="block mb-2 font-medium text-center text-gray-700">Telefono</label>
        <input
          type="text"
          id="telefono"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tipo" className="block mb-2 font-medium text-center text-gray-700">Tipo de reforma (Piso o Local)</label>
        <select
          id="tipo"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Local">Local</option>
          <option value="Piso">Piso</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="superficie" className="block mb-2 font-medium text-center text-gray-700">Superficie (m2)</label>
        <select
          id="superficie"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={superficie}
          onChange={(e) => setSuperficie(e.target.value)}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Menos de 70 m2">Menos de 70 m2</option>
          <option value="Entre 70 y 100 m2">Entre 70 y 100 m2</option>
          <option value="Entre 101 y 150 m2">Entre 101 y 150 m2</option>
          <option value="Entre 151 y 200 m2">Entre 151 y 200 m2</option>
          <option value="Mas de 200m2">Mas de 200m2</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="presupuesto" className="block mb-2 font-medium text-center text-gray-700">Presupuesto estimado</label>
        <input
          type="text"
          id="presupuesto"
          className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-medium text-center text-gray-700">Tu mensaje</label>
        <textarea
          id="message"
          className="w-full p-6 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="px-4 py-2 font-medium text-white transition duration-500 rounded-md bg-black/70 hover:bg-black/90">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
