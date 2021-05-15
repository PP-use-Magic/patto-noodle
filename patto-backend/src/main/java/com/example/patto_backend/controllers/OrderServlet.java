package com.example.patto_backend.controllers;

import com.example.patto_backend.models.*;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.sql.Array;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@WebServlet(name = "OrderServlet", value = "/OrderServlet")
@MultipartConfig
public class OrderServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            int user_id = Middleware.authCheck(request,response);
            OrderOperation orderOperation = new OrderOperation();
            ArrayList<Order> order = orderOperation.getOrderDisplay(user_id);
            out.print(gson.toJson(order));
            response.setStatus(200);

        } catch (Exception | ErrorResponse e){
            ErrorResponse errorResponse = new ErrorResponse(e.toString(),500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        //gson pure string to response
        response.setContentType("application/json");
        Middleware.setCORS(request,response);
        try {
            String myorder = request.getParameter("myorder");
//            List<Integer> orderlist = gson.fromJson(myorder,new TypeToken<List<Integer>>(){}.getType());


            ProductOperation productOperation = new ProductOperation();

            String[] c = myorder.split(",");
            double amount = 0;
            for(int i=0;i<c.length;i++)
            {
                int pid = Integer.parseInt(c[i]);
                amount += productOperation.getPrice(pid);

            }

            OrderOperation orderOperation = new OrderOperation();
            AddressOperation addressOperation = new AddressOperation();

            int user_id = Middleware.authCheck(request,response);
            int address_id = addressOperation.getIdAddress(user_id);

            int order_id = orderOperation.insertOrder(user_id,address_id,amount);

            for (int i=0;i<c.length;i++){
                orderOperation.insertOrder_product( Integer.parseInt(c[i]),order_id);
            }

        }catch (Exception | ErrorResponse e){
            ErrorResponse errorResponse = new ErrorResponse(e.toString(),500);
            response.setStatus(500);
            out.print(gson.toJson(errorResponse));
            e.printStackTrace();
        }
    }
}
