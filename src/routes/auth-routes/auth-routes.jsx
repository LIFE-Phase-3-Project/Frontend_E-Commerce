import { Route } from "react-router-dom"
import { ChatPage } from "../../pages/ChatPage";
import { v4 as uuidv4 } from 'uuid';

export const AuthRoutes = [
    <Route key={uuidv4()} path="/chat" element={<ChatPage />}/>,
]