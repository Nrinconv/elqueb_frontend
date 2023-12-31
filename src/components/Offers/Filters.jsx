import "./OffersComponent.css";
import { useMemo, useState } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { Input } from "@nextui-org/react";

export default function Filters() {
  const [selectedCat, setSelectedCat] = useState(new Set(["Categoría"]));
  const [selectedReg, setSelectedReg] = useState(new Set(["Región"]));
  const [selectedOfertante, setSelectedOfertante] = useState(
    new Set(["Ofertantes"])
  );

  const selectedValueCat = useMemo(
    () => Array.from(selectedCat).join(", ").replaceAll("_", " "),
    [selectedCat]
  );
  const selectedValueReg = useMemo(
    () => Array.from(selectedReg).join(", ").replaceAll("_", " "),
    [selectedReg]
  );
  const selectedValueOfertante = useMemo(
    () => Array.from(selectedOfertante).join(", ").replaceAll("_", " "),
    [selectedOfertante]
  );

  return (
    <div className="flex flex-col gap-4" id="content-filters-offers">
      <div
        className="flex w-full flex-wrap md:flex-nowrap gap-4"
        id="input-style"
      >
        <Input
          type="text"
          label="¿Qué estas buscando?"
          size="sm"
          id="input-style-inner"
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-10">
        <Dropdown id="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize" id="btn-dropdown">
              {selectedValueCat}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedCat}
            onSelectionChange={setSelectedCat}
            id="btn-dropdown-inner"
          >
            <DropdownItem key="cat1">Categoría</DropdownItem>
            <DropdownItem key="cat2">Alimentacion</DropdownItem>
            <DropdownItem key="cat3">Productos Personales</DropdownItem>
            <DropdownItem key="cat4">Ropa y Calzado</DropdownItem>
            <DropdownItem key="cat5">Productos de Limpieza</DropdownItem>
            <DropdownItem key="cat5">Cuidado Infantil</DropdownItem>
            <DropdownItem key="cat5">Medicamentos</DropdownItem>
            <DropdownItem key="cat5">Tecnologia</DropdownItem>
            <DropdownItem key="cat5">Transporte</DropdownItem>
            <DropdownItem key="cat5">Inmobiliario</DropdownItem>
            <DropdownItem key="cat5">Servicios Basicos</DropdownItem>
            <DropdownItem key="cat5">Otros</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown id="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize" id="btn-dropdown">
              {selectedValueReg}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedReg}
            onSelectionChange={setSelectedReg}
            id="btn-dropdown-inner"
          >
            <DropdownItem key="cat1">Región</DropdownItem>
            <DropdownItem key="cat2">Andina</DropdownItem>
            <DropdownItem key="cat3">Caribe</DropdownItem>
            <DropdownItem key="cat4">Orinoquía</DropdownItem>
            <DropdownItem key="cat5">Amazonía</DropdownItem>
            <DropdownItem key="cat5">Pacífico</DropdownItem>
            <DropdownItem key="cat5">Insular</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize" id="btn-dropdown">
              {selectedValueOfertante}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedOfertante}
            onSelectionChange={setSelectedOfertante}
            size="lg"
            id="btn-dropdown-inner"
          >
            <DropdownItem key="cat1">Ofertantes</DropdownItem>
            <DropdownItem key="cat2">Findeter</DropdownItem>
            <DropdownItem key="cat3">Unal</DropdownItem>
            <DropdownItem key="cat4">Colsubsidio</DropdownItem>
            <DropdownItem key="cat5">Compensar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button color="primary" variant="bordered" id="btn-search">
          Buscar
        </Button>
      </div>
    </div>
  );
}
