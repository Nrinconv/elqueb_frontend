import "./Login.css";
import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";

export default function Login() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full" id="general-form">
      <Card className="max-w-full w-[400px] h-[500px]" id="general-card-form">
        <CardHeader
          className="pb-0 pt-2 px-4 flex-col items-start"
          id="text-header-form"
        >
          <h4 className="text-center font-bold text-large">
            ¡Bienvenido a ELQUEB, dónde el que busca encuentra!
          </h4>
        </CardHeader>
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            id="card-login-tab"
          >
            <Tab key="login" title="Inicio de sesión">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Correo electrónico"
                  placeholder="ingresa tu correo"
                  type="email"
                  id="card-login-text"
                />
                <Input
                  isRequired
                  label="Contraseña"
                  placeholder="*******"
                  type="password"
                  id="card-login-text"
                />
                <p className="text-center text-small">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("sign-up")}
                    id="text-link-form"
                  >
                    Registrate
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" id="btn-form">
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
                  id="card-login-text"
                />
                <Input
                  isRequired
                  label="Correo electrónico"
                  placeholder="ingresa tu correo"
                  type="email"
                  id="card-login-text"
                />
                <Input
                  isRequired
                  label="Contraseña"
                  placeholder="*******"
                  type="password"
                  id="card-login-text"
                />
                <p className="text-center text-small">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("login")}
                    id="text-link-form"
                  >
                    Inicia sesión
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" id="btn-form">
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
