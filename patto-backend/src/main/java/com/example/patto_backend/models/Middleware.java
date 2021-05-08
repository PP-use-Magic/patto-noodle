package com.example.patto_backend.models;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Middleware {
    public static int authCheck(HttpServletRequest request,HttpServletResponse response) throws IOException, ErrorResponse {
        HttpSession session = request.getSession(false);
        //session false = if doesnt has session do nothing,
        //true = if doesnt has session create new session
        if (session==null){
            throw new ErrorResponse("unauthorized",401);
        }
        String userID = session.getAttribute("userid").toString();
        return Integer.parseInt(userID);
    }
    public static void setCORS(HttpServletRequest request,HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin","http://localhost:3000/");
                response.setHeader("Access-Control-Allow-Methods","GET POST PUT DELETE");
        response.setHeader("Access-Control-Allow-Credentials","true");
        response.setHeader("Access-Control-Allow-Headers","*");
    }

}