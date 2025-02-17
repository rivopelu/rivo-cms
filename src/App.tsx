import { Route, Routes } from 'react-router-dom';
import BasePage from './components/BasePage';
import { RouteList } from './routes/routes-list';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <main className="dark text-foreground min-h-screen">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        {RouteList.map((item, i) => {
          const Element = item.element;
          return (
            <Route
              path={item.path}
              key={i}
              element={
                <BasePage type={item.type}>
                  <Element />
                </BasePage>
              }
            />
          );
        })}
      </Routes>
    </main>
  );
}

export default App;
