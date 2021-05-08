package com.example.patto_backend.controllers;

import com.example.patto_backend.models.ErrorResponse;
import com.example.patto_backend.models.Middleware;
import com.example.patto_backend.models.User;
import com.example.patto_backend.models.UserOperation;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "SignIn", value = "/SignInServlet")
@MultipartConfig
public class SignIn extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            String username = request.getParameter("username");
            String password = request.getParameter("password");

            //first error-missing username,password
            if (username == null || password == null){
                ErrorResponse errorResponse = new ErrorResponse("missing username or password",400);
                response.setStatus(400);
                out.print(gson.toJson(errorResponse));
                return;
            }
            User user = new UserOperation().signInUser(username,password);
            if (user ==null){
                ErrorResponse errorResponse = new ErrorResponse("wrong username or password",400);
                response.setStatus(400);
                out.print(gson.toJson(errorResponse));
                return;
            }

            HttpSession session = request.getSession(true);
            session.setAttribute("userId",user.getId());
            response.setStatus(200);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
