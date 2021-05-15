package com.example.patto_backend.controllers;

import com.example.patto_backend.models.*;
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

@WebServlet(name = "AddProductServlet", value = "/AddProductServlet")
@MultipartConfig
public class AddProductServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);

        try {
            String title = request.getParameter("title");
            String imageUrl = request.getParameter("imageUrl");
            String price = request.getParameter("price");
            String product_type = request.getParameter("product_type");
            String description = request.getParameter("description");

            double priceI = Double.parseDouble(price);
            int product_typeI = Integer.parseInt(product_type);
            ProductOperation productOperation = new ProductOperation();
            productOperation.insertProduct(title,imageUrl,priceI,product_typeI,description);

        }catch (Exception e){
            ErrorResponse errorResponse = new ErrorResponse(e.toString(),500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
            e.printStackTrace();
        }
    }
}
