package com.example.patto_backend.controllers;

import com.example.patto_backend.models.ErrorResponse;
import com.example.patto_backend.models.Middleware;
import com.example.patto_backend.models.Product;
import com.example.patto_backend.models.ProductOperation;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "ProductServlet", value = "/ProductServlet")
@MultipartConfig
public class ProductServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            ProductOperation productOperation = new ProductOperation();
            ArrayList<Product> products = productOperation.getProduct();
            out.print(gson.toJson(products));

            response.setStatus(200);

        } catch (Exception e){
            ErrorResponse errorResponse = new ErrorResponse(e.toString(),500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
        }
    }
}
