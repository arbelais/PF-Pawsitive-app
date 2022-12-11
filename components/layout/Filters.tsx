import styles from "styles/Filters.module.css";
import React, { useEffect, useState } from "react";
import { IAdoption } from "app/types";
import { getAdoptions, getMinAdoptions } from "utils/dbFetching";
import { useQuery } from "react-query";
import { AiFillFilter } from "react-icons/ai";

type Props = {
  data: IAdoption[] | undefined;
  setData: (data: IAdoption[]) => void;
  setCurrentPage: (n: number) => void;
};
interface Values {
  breed: string;
  size: string;
  age: string;
}

const Filters = ({ setData, data, setCurrentPage }: Props) => {
  const [orderAge, setOrderAge] = useState("min");
  let values: Values = {
    breed: "",
    size: "",
    age: "",
  };
  const [options, setOptions] = useState({ ...values });
  const {
    data: adoptions,
    error,
    isLoading,
    isSuccess,
  } = useQuery(["adoptions"], getMinAdoptions);
  function handleOptions(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    let { name, value } = e.target;
    if (!value) return; //???

    let order: boolean = false;
    if (name === "age" && value !== "") {
      order = true;
      values.age = value;
      values.size = options.size;
      values.breed = options.breed;
    } else if (name === "size") {
      values.size = value;
      values.age = options.age;
      values.breed = options.breed;
    } else if (name === "breed") {
      values.breed = value;
      values.size = options.size;
      values.age = options.age;
    }
    setOptions({ ...options, [name]: value });
    orderData(values, adoptions, order);
  }

  function orderData(values: Values, data: IAdoption[], order: boolean) {
    const { breed, size, age } = values;
    let filteredData: IAdoption[] = order ? adoptions : [];
    if (order && age === orderAge) {
      filteredData = filteredData;
    } else if (age === "min") {
      filteredData = filteredData.reverse();
      setOrderAge("min");
    } else if (age === "max") {
      filteredData = filteredData.reverse();
      setOrderAge("max");
    }
    if (breed !== "") {
      filteredData = data?.filter((d: IAdoption) => d.breed === breed);
      if (size !== "" && filteredData.length > 0) {
        filteredData = filteredData?.filter((d: IAdoption) => d.size === size);
      }
    } else if (size !== "") {
      filteredData = data?.filter((d: IAdoption) => d.size === size);
      if (breed !== "" && filteredData.length > 0) {
        filteredData = filteredData?.filter(
          (d: IAdoption) => d.breed === breed
        );
      }
    }
    setCurrentPage(1);
    setData([...filteredData]);
  }

  function handleReset() {
    setOptions({ breed: "", size: "", age: "" });
    const select = document.querySelectorAll("select");
    select.forEach((s) => (s.value = ""));
    setData([...adoptions]);
    return;
  }

  const onClick = ()=>{
    const filters = document.querySelector('#filters')
    filters?.classList.toggle('hidden')
  }

  return (
    <div className="w-auto lg:top-10">
      <div className="block lg:hidden">
            <button onClick={onClick} className="flex items-center px-3 py-2 border rounded text-pwgreen-500 border-pwgreen-500 hover:text-pwpurple-400 hover:border-pwpurple-400
            hover:border-2
        
            hover:animate-pulse
            ">
            <svg className="fill-current h-3 w-3" viewBox="2 2 14 12" xmlns="http://www.w3.org/2000/svg"><title>Filter</title><path/><AiFillFilter size={18}/></svg>
            </button>
      </div>
      <div id='filters' className="hidden lg:relative lg:block w-auto lg:w-64 h-auto pt-0 px-4 rounded-lg bg-pwgreen-600 mt-2 drop-shadow-lg shadow-lg shadow-pwpurple-200">
        <div className="flex flex-col items-center w-[100%]  h-[25%] bg-pwgreen-600 ">
          <div className="text-center bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-full px-3.5 py-2.5 mt-4 pl-4 shadow-md shadow-pwpurple-700">
            <h2 className="text-white mb-4 mr-4">Filtrar por Categoría</h2>
            <select
              name="breed"
              onChange={(e) => handleOptions(e)}
              className="bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-auto lg:w-full p-2.5 hover:animate-pulse hover:opacity-65"
            >
              {options.breed === "" && <option value="">Categoría...</option>}
              <option className="" value="gato">
                Gatos
              </option>
              <option value="perro">Perros</option>
              <option value="ave">Aves</option>
              <option value="tortuga">Tortugas</option>
            </select>
          </div>

          <div className="text-center bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-full p-3.5 mt-4 pl-4 shadow-md shadow-pwpurple-700">
            <h2 className="text-white mb-4 mr-4">Filtrar por Tamaño</h2>
            <select
              name="size"
              onChange={(e) => handleOptions(e)}
              className="bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-auto lg:w-full p-2.5 hover:animate-pulse hover:opacity-65"
            >
              {options.size === "" && <option value="">Tamaño...</option>}
              <option value="BIG">Grande</option>
              <option value="MEDIUM">Mediano</option>
              <option value="SMALL">Pequeño</option>
            </select>
          </div>

          <div className="text-center bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-full p-3.5 mt-4 mb-4 pl-4 shadow-md shadow-pwpurple-700">
            <h2 className="text-white mb-2">Filtrar por Edad</h2>
            <select
              name="age"
              onChange={(e) => handleOptions(e)}
              className="bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-lg focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-auto lg:w-full p-2.5 hover:animate-pulse hover:opacity-65"
            >
              {options.age === "" && <option value="">Edad...</option>}
              <option value="min">Menor a mayor</option>
              <option value="max">Mayor a menor</option>
            </select>
          </div>
          <div className="flex flex-col items-center w-[50%]  h-[25%] bg-pwgreen-600 rounded-xl">
            <button
              className="bg-pwpurple-500 border-2 border-pwpurple-600 text-white text-sm rounded-xl focus:ring-pwpurple-700 focus:border-pwpurple-700 block w-auto p-2.5 mb-4 shadow-md shadow-pwpurple-700 delay-200  hover:animate-bounce hover:opacity-65"
              onClick={handleReset}
            >
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
