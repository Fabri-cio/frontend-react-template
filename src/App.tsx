import { AppRouter } from "./app/router/AppRouter";
import { Providers } from "./app/providers/Providers";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
