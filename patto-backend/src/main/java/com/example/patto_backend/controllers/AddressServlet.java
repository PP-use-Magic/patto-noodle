package com.example.patto_backend.controllers;

import com.example.patto_backend.models.*;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

@WebServlet(name = "AddressServlet", value = "/AddressServlet")
@MultipartConfig
public class AddressServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request, response);
        try {
            int id = Middleware.authCheck(request, response);
            AddressOperation addressOperation = new AddressOperation();
            Address addresses = AddressOperation.getAddress(id);
            out.print(gson.toJson(addresses));
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

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            String house_number = request.getParameter("house_number");
            String road = request.getParameter("road");
            String country = request.getParameter("country");
            String district = request.getParameter("district");
            String province = request.getParameter("province");
            String postal_code = request.getParameter("postal_code");

            int id = Middleware.authCheck(request,response);
            AddressOperation addressOperation = new  AddressOperation();
            Address address = addressOperation.insertAddress(house_number,road,country,district,province,postal_code,id);
            out.print(gson.toJson(address));

            response.setStatus(200);
        } catch (ErrorResponse e) {
            response.setStatus(e.getStatusCode());
            out.print(gson.toJson(e));
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
