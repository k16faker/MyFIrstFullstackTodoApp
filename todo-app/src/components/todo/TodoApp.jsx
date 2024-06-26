import "./TodoApp.css";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";
import TodoComponent from "./TodoComponent";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

const TodoApp = () => {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default TodoApp;
