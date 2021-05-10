package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Product {
    private int id;
    private String title;
    private String imageUrl;
    private double price;
    private int product_type;
    private String description;

    public Product(int id, String title, String imageUrl, double price, int product_type, String description) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.product_type = product_type;
        this.description = description;
    }

    public Product(ResultSet rs) throws SQLException{
        this.id = rs.getInt("id");
        this.title = rs.getString("title");
        this.imageUrl = rs.getString("imageUrl");
        this.price = rs.getDouble("price");
        this.product_type = rs.getInt("product_type");
        this.description = rs.getString("description");
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getProduct_type() {
        return product_type;
    }

    public void setProduct_type(int product_type) {
        this.product_type = product_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
