package tribalWarsControllers;

import Utility.TBWMediaPlayer;
import Utility.TBWPropertiesManager;
import javafx.fxml.Initializable;
import java.net.URL;
import java.util.ResourceBundle;

public class TribalWarsAppController implements Initializable {

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        double volumeLevel = 0;
        TBWPropertiesManager readProperties = new TBWPropertiesManager();
        try {
            volumeLevel = readProperties.readAudioVolume();
        } catch (Exception e){
            e.printStackTrace();
        }
        TBWMediaPlayer.playTitle(volumeLevel);
    }
}
