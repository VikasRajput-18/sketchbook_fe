import Board from "@/components/Board";
import Menu from "@/components/Menu";
import ToolBox from "@/components/Toolbox";

export default function Home() {
  return (
    <main>
      <Menu />
      <ToolBox />
      <Board />
    </main>
  );
}
