package com.example.patto_backend.controllers;

import com.example.patto_backend.models.ErrorResponse;
import com.example.patto_backend.models.Middleware;
import com.example.patto_backend.models.User;
import com.example.patto_backend.models.UserOperation;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.text.SimpleDateFormat;

@WebServlet(name = "SignUp", value = "/SignUpServlet")
@MultipartConfig
public class SignUp extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);

        try {
            String email = request.getParameter("email");
            String password = request.getParameter("password");
            String firstname = request.getParameter("firstname");
            String surname = request.getParameter("surname");
            String gender = request.getParameter("gender");
            String birthdate = request.getParameter("birthdate");
            String telephoneNumber = request.getParameter("telephoneNumber");

            //first error-missing username,password
            if (email == null || password == null){
                ErrorResponse errorResponse = new ErrorResponse("missing username or password",400);
                response.setStatus(400);
                out.print(gson.toJson(errorResponse));
                return;
            }

            //second error-user already exist
            UserOperation userOperation = new UserOperation();
            User existUser = userOperation.getUser(email);
            if (existUser!=null){
                ErrorResponse errorResponse = new ErrorResponse("this username is already used",401);
                response.setStatus(401);
                out.print(gson.toJson(errorResponse));
                return;
            }

            // Parse string of birthdate to date object
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
            Date parsedBirthdate = new Date(simpleDateFormat.parse(birthdate).getTime());

            User user = userOperation.insertUser(email,password,firstname,surname,gender,parsedBirthdate,telephoneNumber);
            out.print(gson.toJson(user));
            response.setStatus(201);
            HttpSession session = request.getSession(true);
            session.setAttribute("userId",user.getId());

        }catch (Exception e){
            ErrorResponse errorResponse = new ErrorResponse(e.toString(),500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
            e.printStackTrace();
        }
    }
}
