import OrdenCompraProvider from "./context/OrdenCompraProvider";
import OrdenCompras from "./OrdenCompras";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import FormOrdenArticulos from "./FormOrdenArticulos";

function App() {
  return (
    <>
      <OrdenCompraProvider>
        <OrdenCompras />
        <FormAdd />
        <FormEdit />
        <FormOrdenArticulos />
      </OrdenCompraProvider>
    </>
  );
}

export default App;
