import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cuentos = [
  {
    titulo: "Caperucita Roja",
    fragmento: "Caperucita caminaba por el bosque cuando vio un lobo escondido tras un árbol."
  },
  {
    titulo: "El Principito",
    fragmento: "Lo esencial es invisible a los ojos, solo se ve bien con el corazón."
  }
];

export default function JuegoDidactico() {
  const [cuentoActual, setCuentoActual] = useState(null);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Juego Didáctico de Análisis Sintáctico</h1>
      
      {!cuentoActual ? (
        <div className="grid grid-cols-1 gap-4">
          {cuentos.map((cuento, index) => (
            <Card key={index} className="cursor-pointer" onClick={() => setCuentoActual(cuento)}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{cuento.titulo}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{cuentoActual.titulo}</h2>
          <p className="mb-4">{cuentoActual.fragmento}</p>
          
          <Button onClick={() => setCuentoActual(null)}>Volver a la selección</Button>
        </div>
      )}
    </div>
  );
}
