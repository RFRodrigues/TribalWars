package tribalWarsControllers;

import Utility.TBWMediaPlayer;
import Utility.TBWPropertiesManager;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.Slider;
import javafx.scene.layout.VBox;
import javafx.scene.media.MediaPlayer;
import javafx.stage.Stage;
import tribalWarsApp.TribalWarsApplication;

import java.net.URL;
import java.util.ResourceBundle;

public class TribalWarsMenuController implements Initializable {

    @FXML
    private Button exitBtn;
    @FXML
    private Button playBtn;
    @FXML
    private Button btnOptions;
    @FXML
    private VBox mainMenu;
    @FXML
    private VBox optionsMenu;
    @FXML
    private Button returnToMainMenu;
    @FXML
    private Slider volumeSlider;

    private MediaPlayer mediaPlayer;
    private Double volumeLevel;

    @FXML
    private void exit() {
        Platform.exit();
    }

    public void play(javafx.event.ActionEvent actionEvent) {
        Utility.TBWMediaPlayer.getMediaPlayer().stop();
        new TribalWarsApplication().start(new Stage());
        Node source = (Node) actionEvent.getSource();
        Stage stage = (Stage) source.getScene().getWindow();
        stage.close();
    }

    @FXML
    void optionsMenu() {
        mainMenu.setVisible(false);
        optionsMenu.setVisible(true);
    }

    @FXML
    void returnToMainMenu() {
        optionsMenu.setVisible(false);
        mainMenu.setVisible(true);
    }

    void mediaPlayer() {
        mediaPlayer = TBWMediaPlayer.getMediaPlayer();
    }

    void volumeListener() {
        TBWPropertiesManager propertiesManager = new TBWPropertiesManager();
        volumeSlider.valueProperty().addListener(observable -> {
            TBWMediaPlayer.setVolume(volumeSlider.getValue() / 100);
            Double volumeValue = volumeSlider.getValue() / 100;
            propertiesManager.writeAudioVolume(volumeValue);
        });
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        mainMenu.setVisible(true);
        optionsMenu.setVisible(false);
        TBWPropertiesManager readProperties = new TBWPropertiesManager();
        try {
            volumeLevel = readProperties.readAudioVolume();
            volumeSlider.setValue(volumeLevel * 100);
        } catch (Exception e) {
            e.printStackTrace();
        }
        mediaPlayer();
        if (volumeLevel == null){
            TBWMediaPlayer.playTitle(1);
        }
        else TBWMediaPlayer.playTitle(volumeLevel);
        volumeListener();
    }
}