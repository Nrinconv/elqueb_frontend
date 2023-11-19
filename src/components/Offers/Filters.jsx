import "./OffersComponent.css";
import { useMemo, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="text" label="Búsqueda..." size="sm" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-10">
        <Dropdown id="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
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
          >
            <DropdownItem key="cat1">Categoría</DropdownItem>
            <DropdownItem key="cat2">Cat2</DropdownItem>
            <DropdownItem key="cat3">Cat3</DropdownItem>
            <DropdownItem key="cat4">Cat4</DropdownItem>
            <DropdownItem key="cat5">Cat5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown id="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
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
          >
            <DropdownItem key="cat1">Región</DropdownItem>
            <DropdownItem key="cat2">Cat2</DropdownItem>
            <DropdownItem key="cat3">Cat3</DropdownItem>
            <DropdownItem key="cat4">Cat4</DropdownItem>
            <DropdownItem key="cat5">Cat5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="filter">
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
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
          >
            <DropdownItem key="cat1">Ofertantes</DropdownItem>
            <DropdownItem key="cat2">Cat2</DropdownItem>
            <DropdownItem key="cat3">Cat3</DropdownItem>
            <DropdownItem key="cat4">Cat4</DropdownItem>
            <DropdownItem key="cat5">Cat5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button color="primary" variant="bordered">
          Buscar
        </Button>
      </div>
    </div>
  );
}
