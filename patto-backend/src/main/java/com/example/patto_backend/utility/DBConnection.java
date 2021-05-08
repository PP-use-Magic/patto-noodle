package com.example.patto_backend.utility;

import java.sql.*;

public class DBConnection {
    private static final String url="jdbc:mysql://csproject.sit.kmutt.ac.th:3306/db63130500209";
    public static Connection getConnection(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(url,"63130500209","abcd1234");
            return con;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
