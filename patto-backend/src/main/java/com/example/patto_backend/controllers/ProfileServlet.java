package com.example.patto_backend.controllers;

import com.example.patto_backend.models.ErrorResponse;
import com.example.patto_backend.models.Middleware;
import com.example.patto_backend.models.Profile;
import com.example.patto_backend.models.ProfileOperation;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "ProfileServlet", value = "/ProfileServlet")
@MultipartConfig
public class ProfileServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request, response);
        try {
            int id = Middleware.authCheck(request, response);
            ProfileOperation profileOperation = new ProfileOperation();
            ArrayList<Profile> profile = ProfileOperation.getProfile(id);
            out.print(gson.toJson(profile));
            response.setStatus(200);

        } catch (ErrorResponse e) {
            response.setStatus(e.getStatusCode());
            out.print(gson.toJson(e));
        } catch (Exception e) {
            ErrorResponse errorResponse = new ErrorResponse(e.toString(), 500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
        }
    }
}