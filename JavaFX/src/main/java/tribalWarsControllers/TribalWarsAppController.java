package tribalWarsControllers;

import Utility.TBWMediaPlayer;
import Utility.TBWPropertiesManager;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ListView;
import javafx.scene.layout.VBox;

import java.net.URL;
import java.util.ResourceBundle;

public class TribalWarsAppController implements Initializable {

    @FXML
    private Button btnOptions;
    @FXML
    private VBox optionsMenuVBOX;

    private boolean menuOpen = false;

    @FXML
    void optionMenu() {
        if (!menuOpen){
            optionsMenuVBOX.setVisible(true);
            optionsMenuVBOX.setDisable(false);
            menuOpen = true;
        }
        else {
            optionsMenuVBOX.setVisible(false);
            optionsMenuVBOX.setDisable(true);
            menuOpen = false;
        }
    }

    @FXML
    void changeSoundTrack(){

    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        double volumeLevel = 0;
        TBWPropertiesManager readProperties = new TBWPropertiesManager();
        try {
            volumeLevel = readProperties.readAudioVolume();
        } catch (Exception e) {
            e.printStackTrace();
        }
        TBWMediaPlayer.playSoundtrack(1, volumeLevel);
    }
}
