import BarChart from "components/BarChart";
import DataTable from "components/DateTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso(%)</h5>
            <DonutChart />
          </div>
          <div className="py-3">
            <h2 className="text-primary"> Todas vendas</h2>
          </div>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
