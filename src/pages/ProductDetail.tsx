import React, { use } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

type Props = {};

function ProductDetail({}: Props) {
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(params.id && parseInt(params.id));
  // console.log(params); // la propiedad hash es la parte de la url que va después del #, se puede usar para pasar información adicional a la página sin afectar la ruta, la propiedad search es la parte de la url que va después del ?, se puede usar para pasar información adicional a la página sin afectar la ruta, la propiedad pathname es la ruta actual de la página
  // console.log(location);
  // console.log(searchParams.get("nombre")); // el método get() se usa para obtener el valor de un parámetro de búsqueda, el método set() se usa para establecer el valor de un parámetro de búsqueda, el método has() se usa para verificar si un parámetro de búsqueda existe, el método delete() se usa para eliminar un parámetro de búsqueda
  // http://localhost:5173/products/1?nombre=chanchitofeliz&edad=18
  console.log(searchParams.toString());
  return <div>ProductDetail</div>;
}

export default ProductDetail;
