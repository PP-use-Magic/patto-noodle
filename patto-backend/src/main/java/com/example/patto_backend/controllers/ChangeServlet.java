package com.example.patto_backend.controllers;

import com.example.patto_backend.models.ErrorResponse;
import com.example.patto_backend.models.Middleware;
import com.example.patto_backend.models.UserOperation;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ChangeServlet", value = "/ChangeServlet")
@MultipartConfig
public class ChangeServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            String mobile_phone = request.getParameter("telephoneNumber");
            System.out.println(mobile_phone);
            int id = Middleware.authCheck(request,response);
            UserOperation userOperation = new UserOperation();
            userOperation.updatephonenumber(id,mobile_phone);

            response.setStatus(200);
        } catch (ErrorResponse e) {
            response.setStatus(e.getStatusCode());
            out.print(gson.toJson(e));
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
