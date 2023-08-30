
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

import './TodoApp.css'

function AuthenticateRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticateRoute>
                                <WelcomeComponent />
                            </AuthenticateRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticateRoute>
                                <ListTodosComponent />
                            </AuthenticateRoute>
                        } />
                        <Route path='/todo/:id' element={
                            <AuthenticateRoute>
                                <TodoComponent />
                            </AuthenticateRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticateRoute>
                                <LogoutComponent />
                            </AuthenticateRoute>
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}








