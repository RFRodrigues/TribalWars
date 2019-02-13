package tribalWarsControllers;

import Model.Player;
import Utility.TBWMediaPlayerST;
import Utility.TBWPropertiesManagerST;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.Slider;
import javafx.scene.control.TextField;
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
    private VBox loginMenu;
    @FXML
    private Button returnToMainMenu;
    @FXML
    private Button returnToMainMenu1;
    @FXML
    private Slider volumeSlider;
    @FXML
    private Button loginBtn;
    @FXML
    private TextField userField;
    @FXML
    private PasswordField userPWord;

    private static TBWMediaPlayerST mediaPlayer;
    private double volumeLevel;
    public static String UserInstance;

    @FXML
    private void exit() {
        Platform.exit();
    }

    public void Login (javafx.event.ActionEvent actionEvent) {
        Player player = new Player();
        if (player.validatePlayer(userField.getText(),userPWord.getText())){
            UserInstance = userField.getText();
            TBWMediaPlayerST.getInstance().stop();
            new TribalWarsApplication().start(new Stage());
            Node source = (Node) actionEvent.getSource();
            Stage stage = (Stage) source.getScene().getWindow();
            stage.close();
        }
    }

   @FXML
    public void play() {
       mainMenu.setVisible(false);
       optionsMenu.setVisible(false);
       loginMenu.setVisible(true);
    }

    @FXML
    void optionsMenu() {
        mainMenu.setVisible(false);
        optionsMenu.setVisible(true);
        loginMenu.setVisible(false);
    }

    @FXML
    void returnToMainMenu() {
        optionsMenu.setVisible(false);
        mainMenu.setVisible(true);
        loginMenu.setVisible(false);
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