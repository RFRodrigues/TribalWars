package tribalWarsControllers;

import Utility.TBWMediaPlayerST;
import Utility.TBWPropertiesManagerST;
import javafx.application.Platform;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ListView;
import javafx.scene.control.Slider;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.VBox;

import java.net.URL;
import java.util.ResourceBundle;

public class TribalWarsAppController implements Initializable {

    @FXML
    private Button btnOptions;
    @FXML
    private VBox optionsMenuVBOX;
    @FXML
    private ListView<String> soundtrackLV;
    @FXML
    private Slider volumeSlider;
    @FXML
    private Button btnExit;

    private boolean menuOpen = false;
    private ObservableList<String> soundtrackOB = FXCollections.observableArrayList();
    private double volumeLevel;

    @FXML
    private void optionMenu() {
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
    private void changeSoundTrack(String soundtrackName){
        soundtrackName = soundtrackLV.getSelectionModel().getSelectedItem();
        TBWMediaPlayerST.getInstance().playSoundtrack(soundtrackName, volumeLevel);
    }

    private void soundtrackList(){
        soundtrackOB.add("title");
        soundtrackOB.add("ambience01");
        soundtrackOB.add("ambience02");
        soundtrackOB.add("ambience03");
    }

    @FXML
    private void exit(){
        Platform.exit();
    }

    private void volumeListener() {
        volumeSlider.valueProperty().addListener(observable -> {
            TBWMediaPlayerST.getInstance().setVolume(volumeSlider.getValue() / 100);
            Double volumeValue = volumeSlider.getValue() / 100;
            TBWPropertiesManagerST.getInstance().writeAudioVolume(volumeValue);
        });
    }

    @FXML public void handleAudioChange() {
        TBWMediaPlayerST.getInstance().stop();
        volumeLevel = TBWPropertiesManagerST.getInstance().readAudioVolume();
        TBWMediaPlayerST.getInstance().playSoundtrack(soundtrackLV.getSelectionModel().getSelectedItem(),volumeLevel);
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        soundtrackList();
        volumeListener();
        try {
            volumeLevel = TBWPropertiesManagerST.getInstance().readAudioVolume();
            volumeSlider.setValue(volumeLevel * 100);
            TBWMediaPlayerST.getInstance().playSoundtrack("ambience01", volumeLevel);
        } catch (Exception e){
            e.printStackTrace();
        }
        soundtrackLV.setItems(soundtrackOB);
    }
}
