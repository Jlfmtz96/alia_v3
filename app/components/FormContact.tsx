import { useState } from "react";

export default function FormContact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const vj_nombre = formData.get("nombre") as string;
    const vj_apellido = formData.get("apellidos") as string;
    const vj_email = formData.get("correo") as string;
    const vj_telefono = formData.get("telefono") as string;
    
    let vj_campania = "ORGANICO";
    const url = window.location.href;
    if (url.includes("?fb")) vj_campania = "FACEBOOK";
    else if (url.includes("?ads")) vj_campania = "GOOGLE";
    else if (url.includes("campania=mailing")) vj_campania = "MAILING";

    const newErrors: Record<string, string> = {};
    if (!vj_nombre) newErrors.nombre = "Por favor ingresa tu nombre.";
    if (!vj_apellido) newErrors.apellidos = "Por favor ingresa tus apellidos.";
    if (!vj_email) newErrors.correo = "Por favor ingresa tu correo electrónico.";
    else if (!validarEmail(vj_email)) newErrors.correo2 = "Correo electrónico no válido.";
    if (!vj_telefono) newErrors.telefono = "Por favor ingresa un teléfono de 10 dígitos.";
    else if (!validarTelefono(vj_telefono)) newErrors.telefono2 = "Teléfono no válido.";
    if (!isChecked) newErrors.checkbox = "Debes aceptar las políticas del Aviso de privacidad.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const data = {
      ttNombre: vj_nombre.toUpperCase(),
      ttApellidos: vj_apellido.toUpperCase(),
      ttCorreo: vj_email,
      ttTelefono: vj_telefono,
      ttCampania: vj_campania.toUpperCase(),
    };

    fetch("https://www.calypsonet.mx:8440/telemarketing_rst_visualiza_referidos/rest/telemarketing_rst/post_guarda_referido_web_Landing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => alert("Formulario enviado correctamente."))
      .catch(() => alert("Hubo un error al enviar el formulario."));
  };

  const validarEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validarTelefono = (telefono: string) => /^[0-9]{10}$/.test(telefono);

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <div className="lg:flex space-x-2 mb-4">
        {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={`w-full px-3 py-2 border-2 rounded-full focus:outline-none bg-transparent mb-4 lg:mb-0 ${
            errors.nombre ? "text-sm placeholder-red-500" : ""
          }`}
          placeholder={errors.nombre ? `${errors.nombre}` : "Nombre..."}          
        />
        <div className="left-top"></div>
        <div className="right-bottom"></div>
      {/* {errors.nombre && <p className="text-red-500">{errors.nombre}</p>} */}

        {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          className={`w-full px-3 py-2 border-2 rounded-full focus:outline-none bg-transparent ${
            errors.apellidos ? "placeholder-red-500" : ""
          }`}
          placeholder={errors.apellidos ? `${errors.apellidos}` : "Apellidos..."}
          
        />
        <div className={`left-top ${errors.apellidos ? "border-red-500" : ""}`}></div>
      </div>
      {/* <input type="text" name="nombre" placeholder="Nombre" className="border" />
      {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

      <input type="text" name="apellidos" placeholder="Apellidos" className="border" />
      {errors.apellidos && <p className="text-red-500">{errors.apellidos}</p>} */}

      {/* <input type="email" name="correo" placeholder="Correo electrónico" className="border" />
      {errors.correo && <p className="text-red-500">{errors.correo}</p>}
      {errors.correo2 && <p className="text-red-500">{errors.correo2}</p>} */}

      <div className="mb-4">
        {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
        <input
          type="text"
          id="correo"
          name="correo"
          className={`w-full px-3 py-2 border-2 rounded-full focus:outline-none bg-transparent ${
            errors.correo ? "placeholder-red-500" : ""
          }`}
          placeholder={errors.correo ? `${errors.correo}` : "Correo electrónico..."}
          
        />
        <div className="left-top"></div>
        <div className="right-bottom"></div>
      </div>
      {errors.correo2 && <p className="text-red-500">{errors.correo2}</p>}

      {/* <input type="tel" name="telefono" placeholder="Teléfono" className="border" maxLength={10} />
      {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
      {errors.telefono2 && <p className="text-red-500">{errors.telefono2}</p>} */}
      <div className="lg:flex space-x-4">
        {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
        <div>
            <input
            type="tel"
            id="telefono"
            name="telefono"
            className={`w-full px-3 py-2 border-2 rounded-full focus:outline-none bg-transparent ${
                errors.telefono ? "placeholder-red-500" : ""
            }`}
            placeholder={errors.telefono ? `${errors.telefono}` : "Teléfono..."}
            maxLength={10}
            
            />
        {errors.telefono2 && <p className="text-xs text-red-500">{errors.telefono2}</p>}
        </div>

        <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative mr-2">
                <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#dc2c81] checked:border-[#dc2c81]" id="check-custom-style" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </span>
            </label>
            <div>
                <label htmlFor="">
                    Acepto las politicas del{" "}
                    <a href="/aviso-de-privacidad.pdf" target="_blank" className="font-semibold">
                    Aviso de privacidad
                    </a>
                </label>
                {errors.checkbox && <p className="text-xs text-red-500">{errors.checkbox}</p>}
            </div>

        </div>
      </div>

      {/* <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> Acepto el aviso de privacidad
      </label>
      {errors.checkbox && <p className="text-red-500">{errors.checkbox}</p>} */}

    <div className="mt-4">
        <button
          type="submit"
          className="bg-[#dc2c81] text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dc2c81be] focus:ring-opacity-50 cursor-pointer"
        >
          Enviar Datos
        </button>
      </div>
    </form>
  );
}