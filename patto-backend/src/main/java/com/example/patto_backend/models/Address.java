package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Address {
    private int id;
    private String house_number;
    private String road;
    private String country;
    private String district;
    private String province;
    private String postal_code;
    private String address_number;

    public Address(int id, String house_number, String road, String country, String district, String province, String postal_code, String address_number) {
        this.id = id;
        this.house_number = house_number;
        this.road = road;
        this.country = country;
        this.district = district;
        this.province = province;
        this.postal_code = postal_code;
        this.address_number = address_number;
    }
    public Address(ResultSet rs) throws SQLException {
        this.id = rs.getInt("user_id");
        this.house_number = rs.getString("house_number");
        this.road = rs.getString("road");
        this.country = rs.getString("country");
        this.district = rs.getString("district");
        this.province = rs.getString("province");
        this.postal_code = rs.getString("postal_code");
        this.address_number = rs.getString("id");
    }

    public String getHouse_number() {
        return house_number;
    }

    public void setHouse_number(String house_number) {
        this.house_number = house_number;
    }

    public String getRoad() {
        return road;
    }

    public void setRoad(String road) {
        this.road = road;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }
}
