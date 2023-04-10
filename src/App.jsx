import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import  LoginPage, { loginAction }  from "./pages/LoginPage";
import  HomePage  from "./pages/HomePage.jsx";
import Inscription from "./pages/Inscription";
import Apropos from "./pages/Apropos";
import Promos from "./pages/Promos";
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import Faq from "./components/help/faq";
import Etc from "./components/help/etc";
import Error from "./pages/Error";
import LoaderTest from "./components/Loader/LoaderTestPage";
import { testLoader } from "./components/Loader/LoaderTestPage";

const router = createBrowserRouter(
  createRoutesFromElements(
         
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} action={loginAction} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="apropos" element={<Apropos />} />
            <Route path="promos" element={<Promos />} />

              <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="etc" element={<Etc />}/>
              </Route>

              <Route 
              index
              path="test" 
              element={<LoaderTest />}
              loader={testLoader}
              />

            <Route path="*" element={<Error />} />
          </Route>
      
  )
)


function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;