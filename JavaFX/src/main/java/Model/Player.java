package Model;

import Utility.TBWConnectionMasterBuilder;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Player implements Serializable {

    private int ID;
    private String playerUsername;
    private String playerPassword;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getPlayerUsername() {
        return playerUsername;
    }

    public void setPlayerUsername(String playerUsername) {
        this.playerUsername = playerUsername;
    }

    public String getPlayerPassword() {
        return playerPassword;
    }

    public void setPlayerPassword(String playerPassword) {
        this.playerPassword = playerPassword;
    }

    @Override
    public String toString() {
        return playerUsername;
    }

    public Player() {
    }

    public Player(int ID, String playerUsername, String playerPassword) {
        this.ID = ID;
        this.playerUsername = playerUsername;
        this.playerPassword = playerPassword;
    }

    public Player(String playerUsername, String playerPassword) {
        this.playerUsername = playerUsername;
        this.playerPassword = playerPassword;
    }

    public void createPlayer(Player player) {

        Connection con = TBWConnectionMasterBuilder.getConnection();
        PreparedStatement stmt = null;

        try {
            stmt = con.prepareStatement("INSERT INTO jogador (jogadorUsername,jogadorPassword) VALUES(?,?)");
            stmt.setString(1, player.getPlayerUsername());
            stmt.setString(2, player.getPlayerPassword());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            TBWConnectionMasterBuilder.closeConnection(con, stmt);
        }

    }

    public boolean validatePlayer(String userName, String userPassword) {
        Connection con = TBWConnectionMasterBuilder.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        boolean valid = false;

        try {
            stmt = con.prepareStatement("SELECT * FROM Player WHERE playerUsername = ?");
            stmt.setString(1, userName);
            rs = stmt.executeQuery();

            if (rs.next()) {
                String password = rs.getString("playerPassword");
                if (password.equals(userPassword)){
                    valid =true;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            TBWConnectionMasterBuilder.closeConnection(con, stmt, rs);
        }
        return valid;
    }

}
