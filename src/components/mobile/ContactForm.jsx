import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo, setTipo] = useState('');
  const [superficie, setSuperficie] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.sendForm('agus-prueba', 'correo-prueba-araneo', event.target, 'c35DvJhbFaosvgQp6')
      .then(response => {
        console.log(response);
        setLoading(false);
        setSuccess(true);
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="max-w-[72rem] mx-auto px-2 pt-10">
      <div className='flex justify-center'>
        <form onSubmit={sendEmail} className="flex-auto p-4 font-Montserrat">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium  text-gray-700">Nombre y apellido</label>
            <input
              type="text"
              name='name'
              id="name"
              className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium  text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name='email'
              id="email"
              className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block mb-2 font-medium  text-gray-700">Teléfono</label>
            <input
              type="text"
              name='telefono'
              id="telefono"
              className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipo" className="block mb-2 font-medium  text-gray-700">Tipo de reforma</label>
            <select
              name='tipo'
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
            <label htmlFor="superficie" className="block mb-2 font-medium  text-gray-700">Superficie (m2)</label>
            <select
              name='superficie'
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
            <label htmlFor="presupuesto" className="block mb-2 font-medium  text-gray-700">Presupuesto estimado</label>
            <select
              name='presupuesto'
              id="presupuesto"
              className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Hasta 20.000€">Hasta 20.000€</option>
              <option value="De 20.001€ a 45.000€">De 20.001€ a 45.000€</option>
              <option value="De 45.001€ a 70.000€">De 45.001€ a 70.000€</option>
              <option value="Más de 70.000€">Más de 70.000€</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium  text-gray-700">Tu mensaje</label>
            <textarea
              name='message'
              id="message"
              className="w-full p-6 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className={`px-4 py-2 font-medium text-white transition duration-500 rounded-md ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black/70 hover:bg-black/90'}`} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {success && <p className="text-green-500 mt-2">El correo electrónico se envió correctamente.</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
