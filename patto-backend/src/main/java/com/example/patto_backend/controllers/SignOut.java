package com.example.patto_backend.controllers;

import com.example.patto_backend.models.Middleware;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "SignOut", value = "/SignOutServlet")
@MultipartConfig
public class SignOut extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Middleware.setCORS(request,response);
        HttpSession session = request.getSession(false);
        if (session!=null){
            session.invalidate();
            //forced expired
        }
        response.setStatus(200);
    }
}

