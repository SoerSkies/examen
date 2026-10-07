import Card from "../../components/compo/card/card";
import "./dashboard.css";
function Dashboard() { 
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="contenedor-tarjetas">
                    <Card
                        titulo="estudiantes"
                        />
                         <Card
                        titulo="activos"
                        />
                         <Card
                        titulo="cursos"
                        />
                         <Card
                        titulo="aprobacion"
                        />
                        </div>
                </header>
        </div>
    );
}   

export default Dashboard;