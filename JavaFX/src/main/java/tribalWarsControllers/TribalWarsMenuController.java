package tribalWarsControllers;

import Utility.MediaPlayer;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.stage.Stage;
import tribalWarsApp.TribalWarsApplication;
import tribalWarsApp.TribalWarsMenu;

import java.net.URL;
import java.util.ResourceBundle;

public class TribalWarsMenuController implements Initializable {

    @FXML
    private Button exitBtn;
    @FXML
    private Button playBtn;

    private static MediaPlayer mediaPlayer = new MediaPlayer();

    @FXML
    private void exit() {
        Platform.exit();
    }

    @FXML
    void play() {
        TribalWarsMenu.stage.close();
        mediaPlayer.getMediaPlayer().stop();
        new TribalWarsApplication().start(new Stage());
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        //TODO check player settings
        mediaPlayer.playTitle();
    }
}
