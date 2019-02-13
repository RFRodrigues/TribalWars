package Utility;

import java.sql.*;

public class TBWConnectionMasterBuilder {

    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private static final String URL = "jdbc:mysql://remotemysql.com:3306/vePCirP87U";
    private static final String USER = "vePCirP87U";
    private static final String PASS = "pWLh4F6hg5";

    public static void closeConnection(Connection con) {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                TBWExceptionHandler.ThrowEX(e);
            }
        }
    }

    public static void closeConnection(Connection con, PreparedStatement statmt, ResultSet rs) {
        closeConnection(con, statmt);
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            TBWExceptionHandler.ThrowEX(e);
        }
    }

    public static void closeConnection(Connection con, PreparedStatement stmt) {
        closeConnection(con);
        try {
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException e) {
            TBWExceptionHandler.ThrowEX(e);
        }
    }

    public static Connection getConnection() {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException("An error in the connection has occurred." +
                    "please contact an administrator", e);
        }

    }

    public static Connection getConnection2() {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException("An error in the connection has occurred." +
                    "please contact an administrator", e);
        }

    }

    public static Connection getConnection3() {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException("An error in the connection has occurred." +
                    "please contact an administrator", e);
        }

    }


}
