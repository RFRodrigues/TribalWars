package tribalWarsControllers;

import Utility.TBWMediaPlayerST;
import Utility.TBWPropertiesManagerST;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.Slider;
import javafx.scene.layout.VBox;
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

    private static TBWMediaPlayerST mediaPlayer;
    private double volumeLevel;

    @FXML
    private void exit() {
        Platform.exit();
    }

    public void play(javafx.event.ActionEvent actionEvent) {
        TBWMediaPlayerST.getInstance().stop();
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

    private void volumeListener() {
        volumeSlider.valueProperty().addListener(observable -> {
            TBWMediaPlayerST.getInstance().setVolume(volumeSlider.getValue() / 100);
            Double volumeValue = volumeSlider.getValue() / 100;
            TBWPropertiesManagerST.getInstance().writeAudioVolume(volumeValue);
        });
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        mainMenu.setVisible(true);
        optionsMenu.setVisible(false);
        try {
            volumeLevel = TBWPropertiesManagerST.getInstance().readAudioVolume();
            volumeSlider.setValue(volumeLevel * 100);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (volumeLevel < 0){
            volumeLevel = 0.5;
           TBWMediaPlayerST.getInstance().playSoundtrack("title",volumeLevel);
        }
        else TBWMediaPlayerST.getInstance().playSoundtrack("title",volumeLevel);
        volumeListener();
    }
}