import { useState } from "react";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";

export default function Contact() {
  // Estados para guardar los datos del formulario y el estado de la petición
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Función que se ejecuta al darle al botón "Enviar"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setStatus("loading");

    try {
      // Hacemos la petición al backend que acabamos de crear
      const response = await fetch('https://mi-portafolio-dusky-theta.vercel.app/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Limpiamos el formulario

        // Volvemos al estado normal después de 3 segundos
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      className="py-20 px-8 max-w-5xl mx-auto border-t border-neutral-800"
      id="contacto"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Información de contacto */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-neon" size={28} />
            <h2 className="text-3xl font-bold text-white">Trabajemos Juntos</h2>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            ¿Tienes un proyecto en mente o estás buscando un desarrollador para
            tu equipo? Envíame un mensaje y me pondré en contacto contigo lo
            antes posible.
          </p>

          {/* Bloque del Correo (Ya lo tienes) */}
          <div className="flex items-center gap-4 text-gray-300">
            <div className="bg-neutral-800 p-3 rounded-full text-neon">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono mb-1">
                Correo Electrónico
              </p>
              <p className="text-sm font-medium">alan200470@hotmail.com</p>
            </div>
          </div>

          {/* NUEVO: Bloque del Teléfono */}
          <div className="flex items-center gap-4 text-gray-300 mt-6">
            <div className="bg-neutral-800 p-3 rounded-full text-neon">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono mb-1">
                Teléfono / WhatsApp
              </p>
              <p className="text-sm font-medium">+52 55 8597 4292</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 bg-card p-8 rounded-xl border border-neutral-800 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs text-gray-400 font-mono mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-dark border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs text-gray-400 font-mono mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-dark border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs text-gray-400 font-mono mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-dark border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon transition-colors resize-none"
                placeholder="¿En qué te puedo ayudar?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-neon text-dark px-5 py-3 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "idle" && (
                <>
                  <Send size={18} /> Enviar Mensaje
                </>
              )}
              {status === "loading" && "Enviando..."}
              {status === "success" && (
                <>
                  <CheckCircle size={18} /> ¡Mensaje Enviado!
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={18} /> Hubo un error
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
