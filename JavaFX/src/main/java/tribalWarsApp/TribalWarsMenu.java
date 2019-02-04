package tribalWarsApp;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Rectangle2D;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.stage.StageStyle;


public class TribalWarsMenu extends Application {

    public static Stage stage;
    private Scene scene;
    private Screen ecra = Screen.getPrimary();
    private Rectangle2D window = ecra.getVisualBounds();
    private double x, y;

    public static void main(String[] args) {
        TribalWarsMenu.launch(TribalWarsMenu.class, (String[]) null);
    }


    @Override
    public void start(Stage stage) {
        try {
            Firebase firebase = new Firebase();
            firebase.FirebaseTesting();
            TribalWarsMenu.stage = stage;
            Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("FXML/TribalWarsMenu.fxml"));
            scene = new Scene(root);
            stage.initStyle(StageStyle.UNDECORATED);
            stage.setScene(scene);
            root.setOnMousePressed(event -> {
                x = event.getSceneX();
                y = event.getSceneY();
            });
            root.setOnMouseDragged(event -> {

                stage.setX(event.getScreenX() - x);
                stage.setY(event.getScreenY() - y);

            });
            stage.show();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}

