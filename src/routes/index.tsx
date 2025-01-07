import { useSelector } from "react-redux"
import { RootState } from "../store"
import DashboardRoutes from "./Dashboard"
import LoginRoutes from "./Login"

function CustomRoutes() {
    const token = useSelector((state:RootState) => state.token.access_token)
  return (
    token? (
      <div>
        <DashboardRoutes/>
      </div>
    ) : (
      <div>
        <LoginRoutes/>
      </div>
    )
  )
}

export default CustomRoutes