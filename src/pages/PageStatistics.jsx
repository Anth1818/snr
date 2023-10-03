import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import { Box } from "@mui/system";
import RenderDrawer from "../components/Drawer/Drawer";

export default function PageStatistics() {
  return (
    <>
      <Box
      >
        <CintilloHeader></CintilloHeader>
        <RenderDrawer titlePage={"Estadísticas"}></RenderDrawer>
        <main>
          <h1 className="text-7xl">Página Estadísticas</h1>
        </main>
      </Box>
    </>
  );
}
