import { Button } from "@/components/ui/button";
import Image from "next/image";
import ClienteForm from "@/components/forms/ClienteForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px}">
          <Image 
          src="/assets/logofondo.png"
          height={1000}
          width={1000}
          alt="logo"
          className="mb-12 h-25 w-fit" />

          <ClienteForm />

          <div className="text-14-regular mt-20 fflex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2025 Master Clean. 
            </p>
            <Link href="/?admin=true" className="text-green-500 hover:text-green-600">
            Admin
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Al hacer clic en "Enviar", aceptas nuestros{" "}
            <a href="#" className="text-blue-600 hover:underline">Términos de Servicio</a> y{" "}
            <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>.
          </p>
          
        </div>

      </section>
      <Image
        src="/assets/images/portada.jpg"
        width={1000}
        height={1000}
        alt="ClienteImg"
        className="side-img max-w-[50%]"
      />

    </div>
  );
}
