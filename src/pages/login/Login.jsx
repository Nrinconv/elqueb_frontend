import "./Login.css";
import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Login() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full" id="general-form">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Inicio de sesión">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Correo electrónico"
                  placeholder="ingresa tu correo"
                  type="email"
                />
                <Input
                  isRequired
                  label="Contraseña"
                  placeholder="*******"
                  type="password"
                />
                <p className="text-center text-small">
                  ¿No tienes una cuenta?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Registrate
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Iniciar sesión
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Registrarse">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Nombre"
                  placeholder="ingresa tu nombre"
                  type="text"
                />
                <Input
                  isRequired
                  label="Correo electrónico"
                  placeholder="ingresa tu correo"
                  type="email"
                />
                <Input
                  isRequired
                  label="Contraseña"
                  placeholder="*******"
                  type="password"
                />
                <p className="text-center text-small">
                  ¿Ya tienes una cuenta?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Inicia sesión
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Registrarse
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
