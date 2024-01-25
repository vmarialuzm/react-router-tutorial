import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"

export const App = () => {
  return (
    <>
        <NavBar></NavBar>

        <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
    </>
  )
}
